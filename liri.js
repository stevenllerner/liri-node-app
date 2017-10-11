

var request = require("request");
var twitterKeys = require("./keys.js");
var Twitter = require('twitter');
var fs = require("fs");

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
   	console.log("Artist: "+JSON.stringify(data.tracks.items[0].artists[0].name));
   	console.log("Song's Name: "+ JSON.stringify(data.tracks.items[0].name));
   	console.log("Preview on: "+ data.tracks.items[0].external_urls.spotify);
  });
};

function imdbRecall(){
  var queryURL = "http://www.omdbapi.com/?apikey=40e9cece&t=" + "Mr. Nobody" + "&y=&plot=short";

  request(queryURL, function (error, response, body) {
    if (error){
        return console.log("Error occurred: " + error);
      } else {
    var y = JSON.parse(body);
    console.log("Title of the movie: "+y.Title);
    console.log("Year movie came out: "+y.Year);
    console.log("IMDB rating: "+y.imdbRating);
    console.log("Rotten Tomatoes rating: "+y.Ratings[1].Value);
    console.log("Country where movie was produced: "+y.Country);
    console.log("Language of the movie: "+y.Language);
    console.log("Movie plot: "+y.Plot);
    console.log("Actors: "+y.Actors);
    };
  });
};

fs.readFile("./random.txt", "utf8", function (err, data){
  if (err){
    return console.log("Error occurred: " + err);
  } else {
    console.log(data);
  }


})

var input = process.argv;


















// tweetRecall();
// spotifyRecall();

