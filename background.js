function openPage() {
  browser.tabs.create({
    url: "view.html" // view html will open the main page 
  });
}

//The function clearly declared

browser.browserAction.onClicked.addListener(openPage); //Adds a listener to this event.
