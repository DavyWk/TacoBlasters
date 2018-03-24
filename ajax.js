function myFunction() {
//shows that ajax function is working
	alert("ABC");	
var xhr = new XMLHttpRequest();
//enter link variable in second parameter
xhr.open("GET", "https://www.youtube.com/api/timedtext?lang=en&v=6MBaFL7sCb8&tlang=lv", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be injecting a malicious script!
   alert('We got4: "' + xhr.responseText + '"');
   console.log(xhr);
    //document.getElementById("resp").innerHTML = xhr.responseText;
   
  }
}
xhr.send();

    var x = document.getElementById("searchWord").value;
    document.getElementById("result").innerHTML = x;
}




document.addEventListener('searchWordInput', function() {
	//console.log('foo');
  //document.getElementById("searchWordInput").addEventListener("click", myFunction);
  document.getElementById("searchWordInput").addEventListener("click", myFunction);
})

/*

// The handler also must go in a .js file
function myFunction() {
	alert("ABC");
    var x = document.getElementById("searchWord").value;
    document.getElementById("result").innerHTML = x;
}*/

/*window.addEventListener('load', function load(event) {
    document.getElementById('send').onclick = function() {
        var email = document.getElementById('emailAddress').value;
        var subject = document.getElementById('emailSubject').value;
        var body = encodeURIComponent(document.getElementById('emailBody').value);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    };
});*/