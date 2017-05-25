
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

method.GetOHLCVLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchanges', callback);
};
method.GetOHLCVHistory = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/assets',callback);
};

//trades
method.GetTradesLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/symbols', callback);
};

method.GetTradesHistory = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchanges', callback);
};
//Quotes
method.GetQuotesCurrent = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/assets', callback);
};
method.GetQuotesLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/symbols', callback);
};

method.GetQuotesHistory = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/symbols', callback);
};
//OrderBooks
method.GetOrderbookCurrent = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchanges', callback);
};
method.GetOrderbookLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/assets',callback);
};

method.GetOrderbookHistory = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/symbols', callback);
};
//Twitter
method.GetTwitterLatest = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchanges', callback);
};
method.GetTwitterHistory = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/assets',callback);
};
module.exports = CoinApi;


