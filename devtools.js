var xhr = new XMLHttpRequest;
xhr.open("GET", "/fixes2.css", true);
xhr.onload = function(e) {
	chrome.devtools.panels.applyStyleSheet(this.responseText);
	// console.log(this.responseText);
};
xhr.send();
