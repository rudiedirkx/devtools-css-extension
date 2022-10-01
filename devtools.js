const CSS_FILE = 'fixes4.css';

function applyCss(css) {
	console.log('applyCss', css);
	chrome.devtools.panels.applyStyleSheet(css);
}

(function() {
	console.log('devtools.js');
	var xhr = new XMLHttpRequest;
	xhr.open("GET", CSS_FILE, true);
	xhr.onload = function(e) {
console.debug(CSS_FILE, this.responseText);
		applyCss(this.responseText);
		chrome.devtools.panels.setOpenResourceHandler(() => applyCss(this.responseText));
	};
	xhr.onerror = function(e) {
		console.log('devtools.js ajax error', e);
	};
	xhr.send();
})();

(async function() {
	return;

	const CSS_FILE = 'fixes4.css';
	const css = fetch(CSS_FILE).then(rsp => rsp.text());
console.debug(CSS_FILE, css);
	chrome.devtools.panels.applyStyleSheet(css);
	chrome.devtools.panels.setOpenResourceHandler(() => chrome.devtools.panels.applyStyleSheet(css));
})();
