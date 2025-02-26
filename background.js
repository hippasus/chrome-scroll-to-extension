chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scrollToElement",
    title: "Scroll to here",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scrollToElement") {
    chrome.tabs.sendMessage(tab.id, { action: "scrollToElement" });
  }
});
