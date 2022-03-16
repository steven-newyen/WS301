// Called when the user clicks on the browser action (extension icon).
chrome.browserAction.onClicked.addListener(function(tab) {
					chrome.tabs.executeScript({
						file: 'GetSRC.js'
						});
});

