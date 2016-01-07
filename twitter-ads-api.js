var _TwitterAdsAPI = Npm.require('twitter-ads');

TwitterAdsAPI = function TwitterAdsAPI(options) {
  var twitterAdsClient = new _TwitterAdsAPI(options),
      toWrap = ['get', 'put', 'post', 'delete'];
  
  toWrap.forEach(function(k) {
    twitterAdsClient['_' + k] = twitterAdsClient[k].bind(twitterAdsClient);
    
    twitterAdsClient[k] = Meteor.wrapAsync(function(url, params, cb) {
      if (typeof params == 'function') {
        cb = params;
        params = {};
      }
      twitterAdsClient['_' + k](url, params, function(err, resp, body) {
        if (err) return cb(err);
        return cb(null, {resp, body});
      });
    });
    
  });
  
  return twitterAdsClient;
};