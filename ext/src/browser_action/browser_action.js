window.onload = function() {


}

var l = document.getElementById("submit");


l.onclick = function click() {

<<<<<<< HEAD
		var url;
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			url =  tabs[0].url;
			alert(url);
		});

		var videoId = "zkrq7Kpd1so";
		var link = "localhost:8080/videoId=" + videoId + "&searchText=" + document.getElementById("mysearch").value;
		//alert(link);
		window.open(link);
=======
	chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
  }, function(tabs) {
      // and use that tab to fill in out title and url
      var tab = tabs[0];
			url = tab.url;
      // window.open(url);
			var re = /[^=]*$/; // get everything after the equal sign
			var videoId = re.exec(url);
			var link = "localhost:8080/?videoId=" + videoId + "&searchText=" + document.getElementById("mysearch").value;
			window.open(link)
  });

>>>>>>> d3972172bb8f5712c64a2f9c5c3d574419aa47cc
	};
/*var t =
						chrome.tabs.query({active: true}, function(t) {
						alert(t);
					});*/
	var app = angular.module("myApp", []);
	app.controller("myCtrller", ['$scope', function($scope) {
	    $scope.captions = [
				{time: "00:00:04", text: "random captions #1"},
				{time: "00:00:15", text: "random captions #2"},
				{time: "00:00:29", text: "random captions #3"}
			]

				$scope.goToTime = function(index) {
					var unconvertedTime = $scope.captions[index].time;
					var a = unconvertedTime.split(':');
					var timeInSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

					// doesn't work with video within playlists
					var url = window.location.href; // t.url
					var re = /[^=]*$/; // get everything after the equal sign
					var videoId = re.exec(url);
					var link = "https://www.youtube.com/watch?v=" + videoId + "&t=" + timeInSeconds + "s";

					window.open(link);
			};
	}]);

	//yt = document.getElementById("movie_player")
	// yt.seekTo(time) **time in seconds
