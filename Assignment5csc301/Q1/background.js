// Called when the user clicks on the browser action (extension icon).
chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript({
		file: 'jquery-3.6.0.min.js'		
	},function(x){
					chrome.tabs.executeScript({
						file: 'eastern.js'
						});
});
//insert css
chrome.tabs.insertCSS({
       file: 'style.css'
  });
});
