var CoinApi = require('./coinapi_v1.js');




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

// api.GetExchangeRate('BTC','USD',function(ExchangeRate) {
// 	console.log(ExchangeRate);
// });
// api.GetExchangeRates('BTC',function(ExchangeRates) {
// 	console.log(ExchangeRates);
// });
// api.GetPeriods(function(Periods) {
// 	console.log(Periods);
// });
api.GetOHLCVLatest(function(OHLCV) {
	console.log(OHLCV);
});
// api.GetOHLCVHistory(function(OHLCV) {
// 	console.log(OHLCV);
// });
// api.GetTradesLatest(function(Trades) {
// 	console.log(Trades);
// });

// api.GetTradesHistory(function(Trades) {
// 	console.log(Trades);
// });
// api.GetQuotesCurrent(function(Quotes) {
// 	console.log(Quotes);
// });
// api.GetQuotesLatest(function(Quotes) {
// 	console.log(Quotes);
// });
// api.GetQuotesHistory(function(Quotes) {
// 	console.log(Quotes);
// });
// api.GetOrderbookCurrent(function(OrderBooks) {
// 	console.log(OrderBooks);
// });
// api.GetOrderbookLatest(function(OrderBooks) {
// 	console.log(OrderBooks);
// });
// api.GetOrderbookHistory(function(OrderBooks) {
// 	console.log(OrderBooks);
// });
// api.GetTwitterLatest(function(Twitter) {
// 	console.log(Twitter);
// });
// api.GetTwitterHistory(function(Twitter) {
// 	console.log(Twitter);
// });
