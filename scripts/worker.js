onmessage = function(event) {
	importScripts('../style/highlight/highlight.pack.js');
	console.log(event);
	var result = self.hljs.highlightAuto(event.data);
	postMessage(result.value);
}