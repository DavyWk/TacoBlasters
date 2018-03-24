var l = document.getElementById("time");

l.onclick = function goToTime() {
		var unconvertedTime = document.getElementById("time").innerHTML
		var a = unconvertedTime.split(':'); // split it at the colons
		// minutes are worth 60 seconds. Hours are worth 60 minutes.
		var timeInSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

		var videoId = "zkrq7Kpd1so"
		var link = "https://www.youtube.com/watch?v=" + videoId + "&t=" + timeInSeconds + "s";

		window.open(link);
	};
	
	//yt = document.getElementById("movie_player")
	// yt.seekTo(time) **time in seconds