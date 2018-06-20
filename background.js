function openPage() {
  browser.tabs.create({
    url: "view.html"
  });
}

//https://api.themoviedb.org/3/movie/now_playing?api_key=edecce80e15b58d5e5003984ea906d89&language=en-US&page=1
//http://api.openweathermap.org/data/2.5/weather?q=penang&APPID=f6b7c962f75378f682396c5abee3f7b2&units=metric

browser.browserAction.onClicked.addListener(openPage);