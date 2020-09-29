var app = new Vue({
    el: '#app',
    data: {
        high: '',
        low: '',
        currentPrice: '',
        time: ''
    }
});

async function getDailyStockPrice() {
    // Prevent the default event as it isn't going to an actual server.
    event.preventDefault();
    // Gets the value entered into the input textbox.
    const company = document.getElementById('company-input').value;
    console.log(company);
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
    const stockData = await response.json();
    console.log(stockData);
    // Check if there is an invalid API call.
    if (stockData["Error Message"] == "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_DAILY.") {
        app.high = "INVALID TICKER SYMBOL";
        app.low = "INVALID TICKER SYMBOL";
        return 0;
    }
    var yesterdayDate = this.getCurrentDay(1).toString();
    console.log(yesterdayDate);
    var yesterdayData = stockData["Time Series (Daily)"][yesterdayDate];
    console.log(yesterdayData);
    // Gets the high and low from the day before or the Friday if it's the weekend, for the inputted stock.
    if (typeof yesterdayData === 'undefined') {
        yesterdayDate = getCurrentDay(2).toString();
        console.log(yesterdayDate);
    }

    if (typeof yesterdayData === 'undefined') {
        yesterdayDate = getCurrentDay(3).toString();
        console.log(yesterdayDate);
    }
    var yesterdayHigh = yesterdayData["2. high"]
    var yesterdayLow = yesterdayData["3. low"]
    // Sets the values called from the API to the stored data variables of the Vue instance.
    app.high = yesterdayHigh;
    app.low = yesterdayLow;
}

function getCurrentDay(shiftDay = 0) {
    var today = new Date();
    // Just in case the month is between 10 and 12
    var currentMonth = today.getMonth();
    var currentDay = today.getDate() - shiftDay;
    currentMonth = currentMonth + 1;
    if (currentMonth < 10) {
        currentMonth = currentMonth.toString();
        currentMonth = '0' + currentMonth;
    }
    else {
        currentMonth = currentMonth.toString();
    }

    if (currentDay < 10) {
        currentDay = currentDay.toString();
        currentDay = '0' + currentDay;
    }

    var today = today.getFullYear() + '-' + currentMonth + '-' + currentDay;
    return today;
}

async function getCurrentStockPrice() {
    event.preventDefault();
    const company = document.getElementById('current-price-input').value;
    // Intraday API call, gets the value of every minute of trading.
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company}&interval=1min&outputsize=full&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
    const stockData = await response.json();
    console.log(stockData);
    if (stockData["Error Message"] == "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY.") {
        app.currentPrice = "INVALID TICKER SYMBOL";
        return 0;
    }

    // Get the current time in hours and minutes to work out the current market price.
    var currentTime = getCurrentTime().toString();
    // If the market is closed during the current hours then the currentPrice will display this.
    console.log(currentTime);
    var hour = Number(currentTime[0] + currentTime[1]);
    var minutes = Number(currentTime[3] + currentTime[4]);
    console.log(hour);
    console.log(minutes);
    if ((hour == 9 && minutes < 30) || (hour <= 8) || (hour > 15))
    {
        app.currentPrice = "MARKET IS CLOSED";
        return 0;
    }
    var currentDate = getCurrentDay(1).toString();
    console.log(currentDate + " " + currentTime + ":00");
    var currentMarketPrice = stockData["Time Series (1min)"][currentDate + " " + currentTime + ":00"];

    // If the market is closed, such as it being a Satuday or Sunday, then it returns Friday's price.
    if (typeof currentMarketPrice === 'undefined') {
        currentDate = getCurrentDay(2).toString();
        currentMarketPrice = stockData["Time Series (1min)"][currentDate + " " + currentTime + ":00"];
        console.log(currentMarketPrice);
    }
    
    if (typeof currentMarketPrice === 'undefined') {
        currentDate = getCurrentDay(3).toString();
        currentMarketPrice = stockData["Time Series (1min)"][currentDate + " " + currentTime + ":00"];
        console.log(currentMarketPrice);
    }

    // var currentMarketPrice = stockData["Time Series (1min)"]["2020-09-25 16:00:00"]["1. open"];
    app.currentPrice = currentMarketPrice["1. open"];
}

function getCurrentTime() {
    var today = new Date();
    var hour = today.getHours();
    // Convert to EST
    hour = hour - 5;
    var minutes = today.getMinutes();

    if (hour < 0) {
        hour = 24 + hour;
    }

    if (hour < 10) {
        hour = hour.toString();
        hour = '0' + hour;
    }
    else {
        hour = hour.toString();
    }

    // Perform check whether minutes == 0. If it is then minutes = 59 and hour -= 1

    if (minutes < 10) {
        minutes = minutes.toString();
        minutes = '0' + minutes;
    }
    else {
        minutes = minutes.toString();
    }
    return hour + ":" + minutes;
}

// Working timer that is updated every second.
var timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    hour = hour - 5;
    if (hour < 0) {
        hour = 24 + hour;
    }

    app.time = zeroPadding(hour, 2) + ":" + zeroPadding(currentDate.getMinutes(), 2) + ":" + zeroPadding(
        currentDate.getSeconds(), 2);

    function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }
}



