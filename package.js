Package.describe({
  name: 'fallentech:twitter-ads',
  summary: 'Wraps twitter-ads npm package for Meteor',
  version: '0.2.0',
  git: 'https://github.com/FallenTech/meteor-twitter-ads',
  documentation: 'README.md'
});

Npm.depends({'twitter-ads': '0.2.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('twitter-ads-api.js', ['server']);
  api.export(['TwitterAdsAPI', 'TwitterAdsAPIInstance'], ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('fallentech:twitter-ads');
  api.addFiles('tests.js', ['server']);
});