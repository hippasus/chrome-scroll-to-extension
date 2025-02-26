let lastClickedElement = null;

document.addEventListener("contextmenu", (event) => {
  lastClickedElement = event.target;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrollToElement" && lastClickedElement) {
    lastClickedElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
