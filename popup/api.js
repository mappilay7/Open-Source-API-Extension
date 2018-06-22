//alert(data);
//function API done by laxmann.
function api(){

	 var path = "http://api.openweathermap.org/data/2.5/weather?q=penang&APPID=f6b7c962f75378f682396c5abee3f7b2&units=metric";
    $.getJSON(path, function (data) {
      //data = JSON.stringify(data);
      //alert(JSON.stringify(data));
        var textNode = JSON.stringify(data.weather[0].main);
        var textNode1 = JSON.stringify(data.main.temp);
    $("#weather").append(textNode);
        $("#temp").append(textNode1);

    });
}


function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
