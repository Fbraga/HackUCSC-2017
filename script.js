function myMap() {
  var myLatLng = new google.maps.LatLng(36.993287, -122.065120);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(36.9914, -122.0609), 
    zoom: 14,
  }
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatLng
  });
}

 // Function for adding a marker to the page.
function AddMarker() {           
  var myLatLng = new google.maps.LatLng(36.993287, -122.065120);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    
  });
}



function test(){
  alert("tllo");
  AddMarker();
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
