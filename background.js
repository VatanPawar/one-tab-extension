chrome.tabs.onCreated.addListener(function (tab) {
  chrome.tabs.query({}, function (tabs) {
    if (tabs.length > 1) {
      chrome.tabs.remove(tab.id); // Closes the new tab immediately
    }
  });
});
