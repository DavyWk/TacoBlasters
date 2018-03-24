var l = document.getElementById("time");

/*l.onclick = function goToTime() {
		var unconvertedTime = document.getElementById("time").innerHTML
		var a = unconvertedTime.split(':'); // split it at the colons
		// minutes are worth 60 seconds. Hours are worth 60 minutes.
		var timeInSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

		var videoId = "zkrq7Kpd1so"
		var link = "https://www.youtube.com/watch?v=" + videoId + "&t=" + timeInSeconds + "s";

		window.open(link);
	};*/
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

					// doesn't work with video within playlist
					var url = window.location.href; // t.url
					var re = /[^=]*$/; // get everything after the equal sign
					var videoId = "zkrq7Kpd1so"//re.exec(url);
					var link = "https://www.youtube.com/watch?v=" + videoId + "&t=" + timeInSeconds + "s";

					window.open(link);
			};
	}]);

	//yt = document.getElementById("movie_player")
	// yt.seekTo(time) **time in seconds
