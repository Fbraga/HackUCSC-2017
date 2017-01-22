function myMap() {
  var myLatLng = {lat: 36.9914, lng: -122.0609}
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(36.9914, -122.0609), 
    zoom: 14,
  }
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatLng
  });

  var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
  });  
}
function addMarker() {
    //prompt("Add Latitude and Longitude Coords");
   
}
function httpGetAsync(theURL, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.readyState);
        console.log(xmlHttp.status); 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theURL, true); // true for asynchronous 
    xmlHttp.send(null);
}
