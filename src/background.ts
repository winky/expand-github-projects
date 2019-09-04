chrome.runtime.onMessage.addListener((_message, _sender, sendResponse) => {
  console.log("Background got a message");
  sendResponse({});
});
