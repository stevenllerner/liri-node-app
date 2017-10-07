var twitterKeys = require("./keys.js");

//console.log(twitterKeys);

var input = process.argv;

//console.log (input);

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});

// var params = {screen_name: 'samxmoses'}
// client.get("statuses/user_timeline", params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);  // The favorites.      
//   } else {
//     console.log(error)
//   }
// });


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "381cb14110d54d0f928c1b9e098443af",
  secret: "8240a513ced1422aacf3c12d75c568da"
});
 
spotify.search({ type: "track", query: 'The+Sign', limit: 2 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, undefined, 2)); 
});

