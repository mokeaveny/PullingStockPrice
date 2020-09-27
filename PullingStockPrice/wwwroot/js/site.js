var app = new Vue({
    el: '#app',
    data: {
        high: '',
        low: '',
        currentPrice: ''
    },
    methods: {
        getDailyStockPrice: async function () {
            // Prevent the default event as it isn't going to an actual server.
            event.preventDefault();
            // Gets the value entered into the input textbox.
            const company = document.getElementById('company-input').value;
            console.log(company);
            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
            const stockData = await response.json();
            console.log(stockData);
            var yesterdayDate = this.getCurrentDay(1).toString();
            var yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
            // Condition to check if the current date is a Sunday, therefore gets the high and low from the Friday before the markets closed.
            if (typeof yesterdayData != 'string') {
                yesterdayDate = this.getCurrentDay(2).toString();
                yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
                console.log(yesterdayData);
            }
            // Condition to check if the current day of week is a Monday, therefore gets the high and low from the Friday before the markets closed.
            if (typeof yesterdayData != 'string') {
                yesterdayDate = this.getCurrentDay(3).toString();
                yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
                console.log(yesterdayData);
            }
            // Gets the high and low from the day before or the Friday if it's the weekend, for the inputted stock.
            var yesterdayHigh = yesterdayData["2. high"]
            var yesterdayLow = yesterdayData["3. low"]
            // Sets the values called from the API to the stored data variables of the Vue instance.
            this.high = yesterdayHigh;
            this.low = yesterdayLow;
        },
        getCurrentDay: function (shiftDay = 0) {
            var today = new Date();
            // Just in case the month is between 10 and 12
            var currentMonth = today.getMonth();
            currentMonth = currentMonth + 1;
            if (currentMonth < 10) {
                currentMonth = currentMonth.toString();
                currentMonth = '0' + currentMonth;
            }
            else {
                currentMonth = currentMonth.toString();
            }
            var today = today.getFullYear() + '-' + currentMonth + '-' + (today.getDate() - shiftDay);
            return today;
        },
        getCurrentStockPrice: async function () {
            event.preventDefault();
            const company = document.getElementById('current-price-input').value;
            // Intraday API call, gets the value of every minute of trading.
            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company}&interval=1min&outputsize=full&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
            const stockData = await response.json();
            console.log(stockData);
            var currentDate = this.getCurrentDay().toString();
            console.log(currentDate);
            // Get the current time in hours and minutes to work out the current market price.
            var currentTime = this.getCurrentTime().toString();
            console.log(currentDate + " " + currentTime + ":00");
            var currentMarketPrice = stockData["Time Series (1min)"][currentDate + " " + currentTime + ":00"];
            // var currentMarketPrice = stockData["Time Series (1min)"]["2020-09-25 16:00:00"]["1. open"];

            // If the returned object is of type undefined thent the market must be closed.
            if (typeof currentMarketPrice != 'string') {
                this.currentPrice = "MARKET IS CLOSED";
            }
            // Else set the currentPrice to the currentMarketPrice.
            else {
                this.currentPrice = currentMarketPrice;
            }
        },
        getCurrentTime: function () {
            var today = new Date();
            var hour = today.getHours();
            var minutes = today.getMinutes();

            if (hour < 10) {
                hour = hour.toString();
                hour = '0' + hour;
            }
            else {
                hour = hour.toString();
            }

            if (minutes < 10) {
                minutes = minutes.toString();
                minutes = '0' + minutes;
            }
            else {
                minutes = minutes.toString();
            }
            return hour + ":" + minutes;
        }
    }
});



