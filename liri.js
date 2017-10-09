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
//Recalls alias' Sam X Moses' last two tweets
function tweetRecall(){
	var params = {screen_name: 'samxmoses'}
	var i = 2;
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
	  if (!error) {
	    for (i=0; i<2; i++){
	    	j=i+1;
	    	console.log("Sam X Moses tweet # "+j+": "+tweets[i].text);	    	
	    }  
	  } else {
	    console.log(error)
	  }
	});
};
function spotifyRecall(){
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: "381cb14110d54d0f928c1b9e098443af",
  secret: "8240a513ced1422aacf3c12d75c568da"
});
 
spotify.search({ type: "track", query: 'The Sign Ace of Base', limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
// 	console.log(JSON.stringify(data, undefined, 2));
 	console.log("Artist: "+JSON.stringify(data.tracks.items[0].artists[0].name));
 	console.log("Song's Name: "+ JSON.stringify(data.tracks.items[0].name));
 	console.log("Preview on: "+ data.tracks.items[0].external_urls.spotify);
});
};


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
<script type="text/javascript">


var queryURL = "http://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=short&apikey=40e9cece";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        //------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

$.ajax({
	url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(JSON.stringify(response));
//  $("#movie-view").text(JSON.stringify(response));
});





















// tweetRecall();
// spotifyRecall();

