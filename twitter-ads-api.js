var _TwitterAdsAPI = Npm.require('twitter-ads');

// Expose main instance to check against
TwitterAdsAPIInstance = _TwitterAdsAPI;

TwitterAdsAPI = function TwitterAdsAPI(options) {
  var twitterAdsClient = new _TwitterAdsAPI(options),
      baseToWrap = ['get', 'put', 'post', 'delete'],
      tonToWrap = ['tonUpload', 'tonDownload'];
  
  baseToWrap.forEach(function(k) {
    twitterAdsClient['_' + k] = twitterAdsClient[k].bind(twitterAdsClient);
    twitterAdsClient[k] = Meteor.wrapAsync(function(url, params, cb) {
      if (typeof params == 'function') {
        cb = params;
        params = {};
      }
      twitterAdsClient['_' + k](url, params, function(err, twitterResp, twitterBody) {
        if (err) return cb(err);
        return cb(null, {twitterResp, twitterBody});
      });
    });
  });
  
  tonToWrap.forEach(function(k) {
    twitterAdsClient['_' + k] = twitterAdsClient[k].bind(twitterAdsClient);
    twitterAdsClient[k] = Meteor.wrapAsync(function(params, cb) {
      twitterAdsClient['_' + k](params, function(err, result) {
        if (err) return cb(err);
        return cb(null, result);
      });
    });
  });
  
  return twitterAdsClient;
};