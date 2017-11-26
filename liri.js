var Twitter = require('twitter');
//var key = require('./keys.js');
var client = new Twitter({
  consumer_key: '8jEkXHgyuDCpROn5bXIHCuMiY',
  consumer_secret: 'CloLNf3P7w1uDXD8OdpP1f19W3JrCHpigWeFeOUQLqraJu7rog',
  access_token_key: '932896018039017472-zyGxJAEKkLfyKnDPuOkx06sldGsBHB2',
  access_token_secret: 'CZgqxi433c356R3NUXvoibjk8Uwyvl4mOY3uyf85PMlZ5'
});
var Spotify = require('node-spotify-api');
var request = require('request');

// my-tweets

// spotify-this-song

// movie-this

//  do-what-it-says


// client id - spotify - 'e4e6599395ab490281b8548b372654a7'
// Client Secret - 'b0df86a9387a4dd6961c211dccaaab3e'


var arg1 = process.argv[2]; // first agrument

var arg2 = process.argv[3]; // second argument


if (arg1 == "my-tweets")
{
		var params = {id: 932896018039017472};
		client.get ('statuses/lookup',params, function(error, tweets, response){
			if(error) 
			{
				console.log('error')
			}
			console.log(response);
			console.log(tweets);
			
		});	
}
