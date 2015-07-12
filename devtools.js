var xhr = new XMLHttpRequest(),
	stylesheet = 'fixes2.css';

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
console.log(xhr.responseText);
