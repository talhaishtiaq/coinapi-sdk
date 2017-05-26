
var request = require('request');

var method = HttpClient.prototype;

function HttpClient(ApiKey){
	this.SetHeaders(ApiKey);
}

method.SetHeaders = function (ApiKey){
	var headers = {
	    'Content-Type':     'application/json',
	    'X-CoinAPI-Key' : ApiKey
	}
	this.headers = headers;
}

method.PerformReq = function(url, callback){

	var options = {
	    url: url,
	    method: 'GET',
	    headers: this.headers
	}
	request(options, function (error, response, data) {
	    if (!error && response.statusCode == 200) {
	        callback(false , data);
	    }else{
	    	callback(true , data);
		}
        return;
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
method.GetExchangeRate = function(callback, asset_id_base, asset_id_quote, time = null) {
	if(asset_id_quote == null){
		callback(true ,"asset_id_quote is required");
        return;
	}if(asset_id_base == null){
		callback(true ,"asset_id_base is required");
        return;
	}if(time != null ){
        time = time.toISOString();
		this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchangerate/'+asset_id_base+'/'+asset_id_quote+'?time='+time , callback);
	}else{
		this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchangerate/'+asset_id_base+'/'+asset_id_quote , callback);
	}
};
method.GetExchangeRates = function(callback, asset_id_base) {
	if(asset_id_base == null){
		callback(true ,"asset_id_base is required");
        return;
	}
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/exchangerate/' + asset_id_base, callback);
};
//OHCLV
method.GetPeriods = function(callback) {
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/periods', callback);
};

method.GetOHLCVLatest = function(callback, symbol_id, period_id, limit = null) {
	if(symbol_id == null){
		callback(true ,"symbol_id is required");
        return;
	}if(period_id == null){
		callback(true ,"period_id is required");
        return;
	}if(limit != null){
		this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/'+symbol_id + '/latest?period_id=' + period_id+'&limit='+limit, callback);
	}else{
		this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/'+symbol_id + '/latest?period_id=' + period_id, callback);
	}
};
method.GetOHLCVHistory = function(callback, symbol_id, period_id, time_start, time_end = null, limit = null) {
	if(symbol_id == null){
		callback(true ,"symbol_id is required");
        return;
	}if(period_id == null){
		callback(true ,"period_id is required");
        return;
	}if (time_start == null){
        callback(true ,"time_start is required");
        return;
    }
    time_start = time_start.toISOString();
    if (time_end == null && limit != null){
    	this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/' + symbol_id + '/history?period_id=' + period_id + '&time_start=' + time_start + '&limit='+limit, callback);
    }else if (limit == null && time_end != null){
        time_end = time_end.toISOString();
    	this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/' + symbol_id + '/history?period_id=' + period_id + '&time_start=' + time_start + '&time_end='+time_end, callback);
	}else if (limit == null && time_end == null){
		this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/' + symbol_id + '/history?period_id=' + period_id + '&time_start=' + time_start, callback);
    }else{
        time_end = time_end.toISOString();
    	this.HttpClient.PerformReq('https://rest.coinapi.io/v1/ohlcv/' + symbol_id + '/history?period_id=' + period_id + '&time_start=' + time_start + '&time_end='+time_end+'&limit='+limit, callback);
    }
};

//trades
method.GetTradesLatest = function(callback, symbol_id, limit = null) {
    if (symbol_id == null && limit == null)
    {
        url = 'https://rest.coinapi.io/v1/trades/latest';
    }
    else if (symbol_id == null && limit != null)
    {
        url = 'https://rest.coinapi.io/v1/trades/latest?limit=' + limit;
    }
    else if (limit == null && symbol_id != null)
    {
        url = 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/latest';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/latest?limit=' + limit;
    }
    this.HttpClient.PerformReq(url, callback);
};

method.GetTradesHistory = function(callback, symbol_id, time_start, time_end = null, limit = null) {
    if (symbol_id == null)
    {
        callback(true ,"symbol_id is required");
        return;
    }
    if (time_start == null)
    {
        callback(true ,"time_start is required");
        return;
    }
    time_start = time_start.toISOString();
    if (time_end == null && limit != null)
    {
        url= 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/history?time_start='  + time_start + '&limit=' + limit;
    }
    else if (limit == null && time_end != null)
    {
        time_end = time_end.toISOString();
        url= 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end;
    }
    else if (limit == null && time_end == null)
    {
        url= 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/history?time_start=' + time_start;
    }
    else
    {
        time_end = time_end.toISOString();
        url= 'https://rest.coinapi.io/v1/trades/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end + '&limit=' + limit;
    }
    this.HttpClient.PerformReq(url, callback);
};
//Quotes
method.GetQuotesCurrent = function(callback, symbol_id = null) {
    if (symbol_id == null)
    {
        url = 'https://rest.coinapi.io/v1/quotes/current';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/current';
    }
    this.HttpClient.PerformReq(url, callback);
};
method.GetQuotesLatest = function(callback, symbol_id =null, limit = null) {
    if (symbol_id == null && limit == null)
    {
        url = 'https://rest.coinapi.io/v1/quotes/latest';
    }
    else if (symbol_id == null && limit != null)
    {
        url = 'https://rest.coinapi.io/v1/quotes/latest?limit=' + limit;
    }
    else if ($limit == null && symbol_id != null)
    {
        $url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/latest';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/latest?limit=' + limit;
    }
    this.HttpClient.PerformReq(url, callback);
};

method.GetQuotesHistory = function(callback, symbol_id, time_start, time_end = null, limit = null) {
    if (symbol_id == null)
    {
        callback(true ,"symbol_id is required");
        return;
    }
    if (time_start == null)
    {
        callback(true ,"time_start is required");
        return;
    }
    time_start = time_start.toISOString();
    if (time_end == null && limit != null)
    {
        url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/history?time_start=' + time_start + '&limit=' + limit;
    }
    else if (limit == null && time_end != null)
    {
        time_end = time_end.toISOString();
        url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end;
    }
    else if (limit == null && time_end == null)
    {
    	url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/history?time_start=' + time_start;
    }
    else
    {
        time_end = time_end.toISOString();
        url = 'https://rest.coinapi.io/v1/quotes/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end + '&limit=' + limit;
    }
    this.HttpClient.PerformReq(url, callback);
};
//OrderBooks
method.GetOrderbookCurrent = function(callback, symbol_id = null) {
    if (symbol_id == null)
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/current';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/current';
    }
    this.HttpClient.PerformReq(url, callback);
};
method.GetOrderbookLatest = function(callback, symbol_id, limit = null) {
    if (symbol_id == null)
    {
        callback(true ,"symbol_id is required");
        return;
    }
    if (limit == null)
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/latest';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/latest?limit=' + limit;
    }
    this.HttpClient.PerformReq(url , callback);
};

method.GetOrderbookHistory = function(callback, symbol_id, time_start, time_end = null, limit = null) {
    if (symbol_id == null)
    {
        callback(true ,"symbol_id is required");
        return;
    }
    if (time_start == null)
    {
        callback(true ,"time_start is required");
        return;
    }
    time_start = time_start.toISOString();
    if (time_end == null && limit != null)
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/history?time_start=' + time_start + '&limit=' + limit;
    }
    else if (limit == null && time_end != null)
    {
        time_end = time_end.toISOString();
        url= 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end;
    }
    else if (limit == null && time_end == null)
    {
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/history?time_start=' + time_start;
    }
    else
    {
        time_end = time_end.toISOString();
        url = 'https://rest.coinapi.io/v1/Orderbooks/' + symbol_id + '/history?time_start=' + time_start + '&time_end=' + time_end + '&limit=' + limit;
    }
    this.HttpClient.PerformReq(url, callback);
};
//Twitter
method.GetTwitterLatest = function(callback, limit = null) {
    if (limit == null)
    {
        url = 'https://rest.coinapi.io/v1/twitter/latest';
    }
    else
    {
        url = 'https://rest.coinapi.io/v1/twitter/latest?limit=' . limit;
    }
    this.HttpClient.PerformReq(url, callback);
};
method.GetTwitterHistory = function(callback, time_start, time_end = null, limit = null) {
    if (time_start == null)
    {
        callback(true ,"time_start is required");
        return;
    }
    time_start = time_start.toISOString();
    if (time_end == null && limit != null)
    {
        url = 'https://rest.coinapi.io/v1/twitter/history?time_start=' + time_start + '&limit=' + limit;
    }
    else if (limit == null && time_end != null)
    {
        time_end = time_end.toISOString();
        url = 'https://rest.coinapi.io/v1/twitter/history?time_start=' + time_start + '&time_end=' + time_end;
    }
    else if (limit == null && time_end == null)
    {
        url = 'https://rest.coinapi.io/v1/twitter/history?time_start=' + time_start;
    }
    else
    {
        time_end = time_end.toISOString();
        url = 'https://rest.coinapi.io/v1/twitter/history?time_start=' + time_start + '&time_end=' + time_end + '&limit=' + limit;
    }
    this.HttpClient.PerformReq('https://rest.coinapi.io/v1/twitter/history?time_start='+time_start, callback);
};
module.exports = CoinApi;


