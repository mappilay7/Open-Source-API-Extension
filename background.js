function openPage() {
  browser.tabs.create({
    url: "view.html"
  });
}

//The function clearly declared

browser.browserAction.onClicked.addListener(openPage);
