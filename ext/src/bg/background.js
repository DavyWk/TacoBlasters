// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
'use strict';

let b = document.getElementById('submit');

b.onclick = function() {
	console.log(document.getElementById('mysearch').value)
};
