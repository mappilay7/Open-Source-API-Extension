//function edited by laxmann
//view.html page has been created by laxmann.
function openPage() {
  browser.tabs.create({
    url: "http://api.openweathermap.org/data/2.5/weather?q=penang&APPID=f6b7c962f75378f682396c5abee3f7b2&units=metric" // view html will open the main page 
  });
}

//The function clearly declared
// listener works when clicked the icon in tab and opens view.html page.

browser.browserAction.onClicked.addListener(openPage); //Adds a listener to this event.
