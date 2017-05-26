var CoinApi = require('./coinapi_v1.js');

var time_start = new Date();
time_start.setDate(time_start.getDate()-1);


var api = new CoinApi('APIKey');
api.getExchanges(function(err, Exchanges) {
	if(!err){
		Exchanges  = JSON.parse(Exchanges);
		Exchanges.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Exchanges  = JSON.parse(Exchanges);
		console.log(Exchanges);
	}
});
api.getAssets(function(err, Assets) {
	if(!err){
		Assets  = JSON.parse(Assets);
		Assets.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Assets  = JSON.parse(Assets);
		console.log(Assets);
	}
});
api.getSymbols(function(err, Symbols) {
	if(!err){
		Symbols  = JSON.parse(Symbols);
		Symbols.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Symbols  = JSON.parse(Symbols);
		console.log(Symbols);
	}
});

api.GetExchangeRate(function(err, ExchangeRate) {
	if(!err){
		ExchangeRate  = JSON.parse(ExchangeRate);
		console.log(ExchangeRate);
	}else{
		ExchangeRate  = JSON.parse(ExchangeRate);
		console.log(ExchangeRate);
	}
}, 'BTC','USD');
api.GetExchangeRates(function(err, ExchangeRates) {
	if(!err){
		ExchangeRates  = JSON.parse(ExchangeRates);
		ExchangeRates.rates.forEach(function(value, index){
			console.log(value);
		});
	}else{
		ExchangeRates  = JSON.parse(ExchangeRates);
		console.log(ExchangeRates);
	}
}, 'BTC');
api.GetPeriods(function(err, Periods) {
	if(!err){
		Periods  = JSON.parse(Periods);
		Periods.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Periods  = JSON.parse(Periods);
		console.log(Periods);
	}
});
api.GetOHLCVLatest(function(err, OHLCV) {
	if(!err){
		OHLCV  = JSON.parse(OHLCV);
		OHLCV.forEach(function(value, index){
			console.log(value);
		});
	}else{
		OHLCV  = JSON.parse(OHLCV);
		console.log(OHLCV);
	}
}, 'BITSTAMP_SPOT_BTC_USD','1HRS');

api.GetOHLCVHistory(function(err, OHLCV) {
	if(!err){
		OHLCV  = JSON.parse(OHLCV);
		OHLCV.forEach(function(value, index){
			console.log(value);
		});
	}else{
		OHLCV  = JSON.parse(OHLCV);
		console.log(OHLCV);
	}
}, 'BITSTAMP_SPOT_BTC_USD','1HRS', time_start);
api.GetTradesLatest(function(err, Trades) {
	if(!err){
		Trades  = JSON.parse(Trades);
		Trades.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Trades  = JSON.parse(Trades);
		console.log(Trades);
	}
});

api.GetTradesHistory(function(err, Trades) {
	if(!err){
		Trades  = JSON.parse(Trades);
		Trades.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Trades  = JSON.parse(Trades);
		console.log(Trades);
	}
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetQuotesCurrent(function(err, Quotes) {
	if(!err){
		Quotes  = JSON.parse(Quotes);
		console.log(Quotes);
		// Quotes.forEach(function(value, index){
		// 	console.log(value);
		// });
	}else{
		Quotes  = JSON.parse(Quotes);
		console.log(Quotes);
	}
}, 'BITSTAMP_SPOT_BTC_USD');
api.GetQuotesLatest(function(err, Quotes) {
	if(!err){
		Quotes  = JSON.parse(Quotes);
		Quotes.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Quotes  = JSON.parse(Quotes);
		console.log(Quotes);
	}
});
api.GetQuotesHistory(function(err, Quotes) {
	if(!err){
		Quotes  = JSON.parse(Quotes);
		Quotes.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Quotes  = JSON.parse(Quotes);
		console.log(Quotes);
	}
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetOrderbookCurrent(function(err, OrderBooks) {
	if(!err){
		OrderBooks  = JSON.parse(OrderBooks);
		OrderBooks.forEach(function(value, index){
			console.log(value);
		});
	}else{
		OrderBooks  = JSON.parse(OrderBooks);
		console.log(OrderBooks);
	}
});
api.GetOrderbookLatest(function(err, OrderBooks) {
	if(!err){
		OrderBooks  = JSON.parse(OrderBooks);
		OrderBooks.forEach(function(value, index){
			console.log(value);
		});
	}else{
		OrderBooks  = JSON.parse(OrderBooks);
		console.log(OrderBooks);
	}
}, 'BITSTAMP_SPOT_BTC_USD');
api.GetOrderbookHistory(function(err, OrderBooks) {
	if(!err){
		OrderBooks  = JSON.parse(OrderBooks);
		OrderBooks.forEach(function(value, index){
			console.log(value);
		});
	}else{
		OrderBooks  = JSON.parse(OrderBooks);
		console.log(OrderBooks);
	}
}, 'BITSTAMP_SPOT_BTC_USD', time_start);
api.GetTwitterLatest(function(err, Twitter) {
	if(!err){
		Twitter  = JSON.parse(Twitter);
		Twitter.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Twitter  = JSON.parse(Twitter);
		console.log(Twitter);
	}
});
api.GetTwitterHistory(function(err, Twitter) {
	if(!err){
		Twitter  = JSON.parse(Twitter);
		Twitter.forEach(function(value, index){
			console.log(value);
		});
	}else{
		Twitter  = JSON.parse(Twitter);
		console.log(Twitter);
	}
}, time_start);
