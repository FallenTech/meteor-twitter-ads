Tinytest.add('Instantiation', function (test) {
  var T = TwitterAdsAPI({
    consumer_key: 'XXX',
    consumer_secret: 'XXX',
    access_token: 'XXX',
    access_token_secret: 'XXX'
  });
  test.instanceOf(T, TwitterAdsAPIInstance, 'Instantiation OK');
});
