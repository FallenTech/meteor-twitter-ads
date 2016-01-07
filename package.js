Package.describe({
  name: 'sparaker:twitter-ads',
  summary: 'Wraps twitter-ads npm package for Meteor',
  version: '0.0.9',
  git: 'https://github.com/FallenTech/meteor-twitter-ads',
  documentation: 'README.md'
});

Npm.depends({'twitter-ads': '0.0.9'});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('twitter-ads.js');
  api.export('TwitterAdsAPI', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sparaker:twitter-ads', ['server']);
  api.addFiles('twitter-ads-tests.js', ['server']);
});