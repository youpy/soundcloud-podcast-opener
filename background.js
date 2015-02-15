tabs.
  onActivated.
  addListener(function(activeInfo) {
    tabs.get(activeInfo.tabId, function(tab) {
      updateTab(tab);
    });
  });

tabs.
  onUpdated.
  addListener(function(tabId, changeInfo, tab) {
    if (tab.highlighted) {
      updateTab(tab);
    }
  });
