var xhr = new XMLHttpRequest(),
	stylesheet = 'fixes3.css';

xhr.open("GET", "/" + stylesheet, true);
xhr.onload = function(e) {
	chrome.devtools.panels.applyStyleSheet(this.responseText);
	// console.log(this.responseText);
};
xhr.send();
