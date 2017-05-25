var CoinApi = require('./coinapi_v1.js');




var api = new CoinApi('APIKey');
api.getExchanges(function(Exchanges) {
	console.log(Exchanges);
});
api.getAssets(function(Assets) {
	console.log(Assets);
});
api.getSymbols(function(Symbols) {
	console.log(Symbols);
});

api.GetExchangeRate('BTC','USD',function(ExchangeRate) {
	console.log(ExchangeRate);
});
api.GetExchangeRates('BTC',function(ExchangeRates) {
	console.log(ExchangeRates);
});
api.GetPeriods(function(Periods) {
	console.log(Periods);
});
api.GetOHLCVLatest('BITSTAMP_SPOT_BTC_USD','1HRS' , function(OHLCV) {
	console.log(OHLCV);
});
var time_start = new Date();
time_start.setDate(time_start.getDate()-1);
time_start = time_start.toISOString();
api.GetOHLCVHistory('BITSTAMP_SPOT_BTC_USD','1HRS', time_start ,function(OHLCV) {
	console.log(OHLCV);
});
api.GetTradesLatest(function(Trades) {
	console.log(Trades);
});

api.GetTradesHistory('BITSTAMP_SPOT_BTC_USD', time_start,  function(Trades) {
	console.log(Trades);
});
api.GetQuotesCurrent(function(Quotes) {
	console.log(Quotes);
});
api.GetQuotesLatest(function(Quotes) {
	console.log(Quotes);
});
api.GetQuotesHistory('BITSTAMP_SPOT_BTC_USD', time_start, function(Quotes) {
	console.log(Quotes);
});
api.GetOrderbookCurrent(function(OrderBooks) {
	console.log(OrderBooks);
});
api.GetOrderbookLatest('BITSTAMP_SPOT_BTC_USD', function(OrderBooks) {
	console.log(OrderBooks);
});
api.GetOrderbookHistory('BITSTAMP_SPOT_BTC_USD', time_start, function(OrderBooks) {
	console.log(OrderBooks);
});
api.GetTwitterLatest(function(Twitter) {
	console.log(Twitter);
});
api.GetTwitterHistory(time_start, function(Twitter) {
	console.log(Twitter);
});
