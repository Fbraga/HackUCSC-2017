
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(36.9914, -122.0609), 
    zoom: 14
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
}

