
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
	    	console.log("Alias Sam X Moses tweet # "+j+": "+tweets[i].text);	    	
	    }  
	  } else {
	    console.log(error)
	  }
	});
};

function spotifyRecall(songName){
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify({
    id: "381cb14110d54d0f928c1b9e098443af",
    secret: "8240a513ced1422aacf3c12d75c568da"
  });
   
  spotify.search({ type: "track", query: songName, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   	console.log("Artist: "+JSON.stringify(data.tracks.items[0].artists[0].name));
   	console.log("Song's Name: "+ JSON.stringify(data.tracks.items[0].name));
   	console.log("Preview on: "+ data.tracks.items[0].external_urls.spotify);
  });
};

function imdbRecall(movieName){
  var queryURL = "http://www.omdbapi.com/?apikey=40e9cece&t=" + movieName + "&y=&plot=short";

  request(queryURL, function (error, response, body) {
    if (error){
        return console.log("Error occurred: " + error);
      } else {
    var y = JSON.parse(body);
//    console.log(y);
    console.log("Title of the movie: "+y.Title);
    console.log("Year movie came out: "+y.Year);
    console.log("IMDB rating: "+y.imdbRating);
    console.log("Rotten Tomatoes rating: "+y.Ratings[0].Value);
    console.log("Country where movie was produced: "+y.Country);
    console.log("Language of the movie: "+y.Language);
    console.log("Movie plot: "+y.Plot);
    console.log("Actors: "+y.Actors);
    };
  });
};
var randomInput = [];
function randTextInst(){
  fs.readFile("./random.txt", "utf8", function (err, data){
    if (err){
      return console.log("Error occurred: " + err);
    } else {
      randomInput = data.split(",");
      input[2] = randomInput[0];
      input[3] = randomInput[1];
      if (input[2] === "my-tweets") {
        tweetRecall();
      };
      if (input[2] === "spotify-this-song") {
        spotifyRecall(input[3]);
      };
      if (input[2] === "movie-this") {
      imdbRecall(input[3]);
      };
    };
  });
};

var input = process.argv;
//console.log(input);
if (input[2] === "do-what-it-says") {
  randTextInst();
} else {
  if (input[2] === "my-tweets") {
    tweetRecall();
  };
  if (input[2] === "spotify-this-song") {
    spotifyRecall(input[3]);
  };
  if (input[2] === "movie-this") {
    imdbRecall(input[3]);
  };
};


