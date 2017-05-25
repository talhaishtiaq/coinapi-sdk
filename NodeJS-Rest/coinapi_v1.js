
var request = require('request');

var method = HttpClient.prototype;

function HttpClient(ApiKey){
	this.SetHeaders(ApiKey);
}

method.SetHeaders = function (ApiKey){
	var headers = {
	    'User-Agent':       'Super Agent/0.0.1',
	    'Content-Type':     'application/json',
	    'X-CoinAPI-Key' : ApiKey
	}
	this.headers = headers;
	//return headers;
}

method.PerformReq = function(url, callback){

	var options = {
	    url: url,
	    method: 'GET',
	    headers: this.headers
	}
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        callback(body);
	    }
	});
}

var method = CoinApi.prototype;

function CoinApi(ApiKey){
	this.ApiKey = ApiKey;
	this.HttpClient = new HttpClient(this.ApiKey);
}
//metadata
method.getExchanges = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchanges', callback);
};
method.getAssets = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/assets',callback);
};
method.getSymbols = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/symbols', callback);
};
//Exchange Rates
method.GetExchangeRate = function(asset_id_base, asset_id_quote, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchangerate/'+asset_id_base+'/'+asset_id_quote , callback);
};
method.GetExchangeRates = function(asset_id_base, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchangerate/' + asset_id_base, callback);
};
//OHCLV
method.GetPeriods = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/periods', callback);
};

method.GetOHLCVLatest = function(symbol_id, period_id, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/'+symbol_id + '/latest?period_id=' + period_id, callback);
};
method.GetOHLCVHistory = function(symbol_id, period_id, time_start ,callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/' + symbol_id + '/history?period_id=' + period_id + '&time_start=' + time_start, callback);
};

//trades
method.GetTradesLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/trades/latest', callback);
};

method.GetTradesHistory = function(symbol_id, time_start,  callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/trades/' + symbol_id + '/history?time_start=' + time_start, callback);
};
//Quotes
method.GetQuotesCurrent = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/quotes/current', callback);
};
method.GetQuotesLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/quotes/latest', callback);
};

method.GetQuotesHistory = function(symbol_id, time_start, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/quotes/'+ symbol_id + '/history?time_start=' +time_start, callback);
};
//OrderBooks
method.GetOrderbookCurrent = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/Orderbooks/current', callback);
};
method.GetOrderbookLatest = function(symbol_id, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/latest',callback);
};

method.GetOrderbookHistory = function(symbol_id, time_start, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/Orderbooks/'+symbol_id+'/history?time_start='+time_start, callback);
};
//Twitter
method.GetTwitterLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/twitter/latest', callback);
};
method.GetTwitterHistory = function(time_start, callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/twitter/history?time_start='+time_start, callback);
};
module.exports = CoinApi;


