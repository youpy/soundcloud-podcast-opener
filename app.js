var pageAction = chrome.pageAction;
var tabs = chrome.tabs;
var noName = [
  'you',
  'stream',
  'upload',
  'notifications',
  'messages',
  'term-of-use',
  'pages',
  'mobile',
  'jobs',
  'settings',
  'pro',
  'explore',
  'people',
  'search'
];

var getName = function(url) {
  var name;

  if (url.match(/^https?:\/\/soundcloud.com\/([^\/\?]+)/)) {
    name = RegExp.$1;
  }

  return name;
};

var checkUrl = function(url) {
  var ok = false;
  var name = getName(url);

  if (typeof name !== 'undefined' &&
      noName.indexOf(name) === -1) {
    ok = true;
  }

  return ok;
};

var updateTab = function(tab) {
  if (checkUrl(tab.url)) {
    pageAction.show(tab.id);
    pageAction.setTitle({
      tabId: tab.id,
      title: 'Open podcast for ' + getName(tab.url) + '\'s tracks'
    });
  } else {
    pageAction.hide(tab.id);
  }
};
