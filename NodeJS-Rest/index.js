var CoinApi = require('./coinapi_v1.js');



var time_start = new Date();
time_start.setDate(time_start.getDate()-1);
time_start = time_start.toISOString();

var api = new CoinApi('APIKey');
// api.getExchanges(function(Exchanges) {
// 	console.log(Exchanges);
// });
// api.getAssets(function(Assets) {
// 	console.log(Assets);
// });
// api.getSymbols(function(Symbols) {
// 	console.log(Symbols);
// });

// api.GetExchangeRate(function(ExchangeRate) {
// 	console.log(ExchangeRate);
// }, 'BTC','USD');
// api.GetExchangeRates(function(ExchangeRates) {
// 	console.log(ExchangeRates);
// }, 'BTC');
// api.GetPeriods(function(Periods) {
// 	console.log(Periods);
// });
// api.GetOHLCVLatest(function(OHLCV) {
// 	console.log(OHLCV);
// }, 'BITSTAMP_SPOT_BTC_USD','1HRS');

// api.GetOHLCVHistory(function(OHLCV) {
// 	console.log(OHLCV);
// }, 'BITSTAMP_SPOT_BTC_USD','1HRS', time_start);
// api.GetTradesLatest(function(Trades) {
// 	console.log(Trades);
// });

// api.GetTradesHistory(function(Trades) {
// 	console.log(Trades);
// }, 'BITSTAMP_SPOT_BTC_USD', time_start);
// api.GetQuotesCurrent(function(Quotes) {
// 	console.log(Quotes);
// }, 'BITSTAMP_SPOT_BTC_USD');
// api.GetQuotesLatest(function(Quotes) {
// 	console.log(Quotes);
// });
// api.GetQuotesHistory(function(Quotes) {
// 	console.log(Quotes);
// }, 'BITSTAMP_SPOT_BTC_USD', time_start);
// api.GetOrderbookCurrent(function(OrderBooks) {
// 	console.log(OrderBooks);
// });
// api.GetOrderbookLatest(function(OrderBooks) {
// 	console.log(OrderBooks);
// }, 'BITSTAMP_SPOT_BTC_USD');
// api.GetOrderbookHistory(function(OrderBooks) {
// 	console.log(OrderBooks);
// }, 'BITSTAMP_SPOT_BTC_USD', time_start);
// api.GetTwitterLatest(function(Twitter) {
// 	console.log(Twitter);
// });
api.GetTwitterHistory(function(Twitter) {
	Twitter  = JSON.parse(Twitter);
	Twitter.forEach(function(value, index){
		console.log(value);
	});
}, time_start);
