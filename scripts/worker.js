onmessage = function(event) {
	importScripts('../style/highlight/highlight.pack.js');

	var msg = event.data;
	var result = self.hljs.highlightAuto(msg.textContent);
	
	//reset the textContent and send back
	msg.textContent = result.value;	
	postMessage(msg);
}