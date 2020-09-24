async function getDailyStockPrice() {
    // Prevent the default event as it isn't going to an actual server.
    event.preventDefault();
    // Gets the value entered into the input textbox.
    const company = document.getElementById('company-input').value;
    console.log(company);
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=51WURQPBUP1HGNHB`, { mode: 'cors' })
    const stockData = await response.json();
    console.log(stockData);
    const yesterdayDate = getYesterdayDate().toString();
    var yesterdayData = stockData["Time Series (Daily)"][yesterdayDate]
    console.log(yesterdayData)
    // Need to build in an exception if the day is a weekend.
    var yesterdayHigh = yesterdayData["2. high"]
    var yesterdayLow = yesterdayData["3. low"]
    console.log(yesterdayHigh);
    console.log(yesterdayLow);
}

function getYesterdayDate() {
    var yesterday = new Date();
    // Just in case the month is between 10 and 12
    var currentMonth = yesterday.getMonth();
    currentMonth = currentMonth + 1;
    if (currentMonth < 10) {
        currentMonth = currentMonth.toString();
        currentMonth = '0' + currentMonth;
    }
    else
    {
        currentMonth = currentMonth.toString();
    }
    var yesterday = yesterday.getFullYear() + '-' + currentMonth + '-' + (yesterday.getDate() -1);
    return yesterday;
}

async function getHigh() {

}