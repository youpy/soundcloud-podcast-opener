chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  var tab = tabs[0];
  var openOtherApp = document.getElementById('open-other-app');
  var openInTab = document.getElementById('open-in-tab');

  openOtherApp.addEventListener('click', function() {
    chrome.tabs.create({
      url: 'itpc://xcxcxcxc.herokuapp.com/user_tracks?name=' + getName(tab.url)
    });
  });

  openInTab.addEventListener('click', function() {
    chrome.tabs.create({
      url: 'http://xcxcxcxc.herokuapp.com/user_tracks?name=' + getName(tab.url)
    });
  });
});
