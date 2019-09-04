chrome.runtime.sendMessage({}, _response => {
  const checkRedy = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkRedy);
      console.log("We're in the injected content script!");
    }
  });
});
