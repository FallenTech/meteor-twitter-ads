# Twitter Ads API

[![Build Status](https://travis-ci.org/FallenTech/meteor-twitter-ads.png?branch=master)](https://travis-ci.org/FallenTech/meteor-twitter-ads)

Wrapper Meteor package for [Twitter Ads API](https://github.com/FallenTech/twitter-ads) NPM package.

### Add package

    meteor add fallentech:twitter-ads
    

On the `server`

```js
var T = TwitterAdsAPI({
  consumer_key: 'XXX',
  consumer_secret: 'XXX',
  access_token: 'XXX',
  access_token_secret: 'XXX'
});

var result = T.get('accounts/:account_id', {account_id: 'XXX'});

console.log(result.body);
/* If everything goes okay,
you should get something similar to this:

  {
    data: {
      approval_status: "ACCEPTED",
      created_at: "2014-07-14T22:51:48Z",
      deleted: false,
      id: "hkkd",
      name: "Some person named Emma",
      salt: "973fef8gce1c5d5f6bba4b91827c214a",
      timezone: "America/Los_Angeles",
      timezone_switch_at: "2014-07-27T07:00:00Z",
      updated_at: "2014-08-27T21:59:56Z"
    },
    data_type: "account",
    request: {
      params: {
        account_id: "hkkd"
      }
    }
  }  
*/

/* Use T.get, T.post, T.put and T.delete
   refer to Twitter API docs for the details on call parameters. */
```

See the full docs [here](https://github.com/FallenTech/twitter-ads).

