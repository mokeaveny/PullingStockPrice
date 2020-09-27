async function getDailyStockPrice() {
    // Prevent the default event as it isn't going to an actual server.
    event.preventDefault();
    // Gets the value entered into the input textbox.
    const company = document.getElementById('company-input').value;
    console.log(company);
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
    const stockData = await response.json();
    console.log(stockData);
    var yesterdayDate = getYesterdayDate().toString();
    var yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
    // Condition to check if the current date is a Sunday, therefore gets the high and low from the Friday before the markets closed.
    if (typeof yesterdayData != 'string')
    {
        yesterdayDate = getYesterdayDate(1).toString();  
        yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
        console.log(yesterdayData);
    }
    // Gets the high and low from the day before or the Friday if it's the weekend, for the inputted stock.
    var yesterdayHigh = yesterdayData["2. high"]
    var yesterdayLow = yesterdayData["3. low"]
    console.log(yesterdayHigh);
    console.log(yesterdayLow);
}

function getYesterdayDate(shiftDay = 0) {
    var today = new Date();
    // Just in case the month is between 10 and 12
    var currentMonth = today.getMonth();
    currentMonth = currentMonth + 1;
    if (currentMonth < 10) {
        currentMonth = currentMonth.toString();
        currentMonth = '0' + currentMonth;
    }
    else
    {
        currentMonth = currentMonth.toString();
    }
    var today = today.getFullYear() + '-' + currentMonth + '-' + (today.getDate() -1 -shiftDay);
    return today;
}

