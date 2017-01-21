
function myMap() {
  var myLatLng = {lat: 36.9914, lng: -122.0609}
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(36.9914, -122.0609), 
    zoom: 4,
  }
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
  });

  var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
  });  
}

