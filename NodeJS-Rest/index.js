var CoinApi = require('./coinapi_v1.js');



var time_start = new Date();
time_start.setDate(time_start.getDate()-1);
time_start = time_start.toISOString();

var api = new CoinApi('APIKey');
api.getExchanges(function(err, Exchanges) {
	console.log(Exchanges);
});
api.getAssets(function(err, Assets) {
	console.log(Assets);
});
api.getSymbols(function(err, Symbols) {
	console.log(Symbols);
});

api.GetExchangeRate(function(err, ExchangeRate) {
	console.log(ExchangeRate);
}, 'BTC','USD');
api.GetExchangeRates(function(err, ExchangeRates) {
	console.log(ExchangeRates);
}, 'BTC');
api.GetPeriods(function(err, Periods) {
	console.log(Periods);
});
api.GetOHLCVLatest(function(err, OHLCV) {
	console.log(OHLCV);
}, 'BITSTAMP_SPOT_BTC_USD','1HRS');

api.GetOHLCVHistory(function(err, OHLCV) {
	console.log(OHLCV);
}, 'BITSTAMP_SPOT_BTC_USD','1HRS', time_start);
api.GetTradesLatest(function(err, Trades) {
	console.log(Trades);
});

api.GetTradesHistory(function(err, Trades) {
	console.log(Trades);
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetQuotesCurrent(function(err, Quotes) {
	console.log(Quotes);
}, 'BITSTAMP_SPOT_BTC_USD');
api.GetQuotesLatest(function(err, Quotes) {
	console.log(Quotes);
});
api.GetQuotesHistory(function(err, Quotes) {
	console.log(Quotes);
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetOrderbookCurrent(function(err, OrderBooks) {
	console.log(OrderBooks);
});
api.GetOrderbookLatest(function(err, OrderBooks) {
	console.log(OrderBooks);
}, 'BITSTAMP_SPOT_BTC_USD');
api.GetOrderbookHistory(function(err, OrderBooks) {
	console.log(OrderBooks);
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetTwitterLatest(function(err, Twitter) {
	console.log(Twitter);
});
api.GetTwitterHistory(function(err, Twitter) {
	Twitter  = JSON.parse(Twitter);
	Twitter.forEach(function(value, index){
		console.log(value);
	});
}, time_start);
