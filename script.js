var map = null;

//var marker = null;
function myMap() {
  var myLatLng = new google.maps.LatLng(36.993287, -122.065120);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(36.9914, -122.0609), 
    zoom: 13,
  }
  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: myLatLng
  });
  
}

 // Function for adding a marker to the page.
function AddMarker(name) { 
  httpGetAsync("/get/".concat(name), function(ret_text) {
    var coord_obj = JSON.parse(ret_text)
    var lat = coord_obj.lat
    var lng = coord_obj.lon
    //marker.setMap(null);           
    var myLatLng = new google.maps.LatLng(lat, lng);
 /* marker = new google.maps.Marker({
      position: myLatLng,
      map: map,  
    });*/
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      icon:"smile2.png"
    });
  })
}

function AddMarkerPersonal(lat, lng) { 
  //marker.setMap(null);           
 // var myLatLng = new google.maps.LatLng(lat, lng);
 /* marker = new google.maps.Marker({
    position: myLatLng,
    map: map,  
  });*/
  
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon:"heart.png"
  });
  
}


function httpGetAsync(theURL, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.readyState);
        console.log(xmlHttp.status); 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	    //document.getElementByID("poi_sidebar");
            console.log(xmlHttp.responseText);
            callback(xmlHttp.responseText);
        }
        //else alert('Something is wrong !!');
    }
    xmlHttp.open("GET", theURL, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync('/get_names', function(ret_text) {
  var name_array = JSON.parse(ret_text)
  name_array.forEach(function(element) {
    var link = document.createElement("A")
    var text = document.createTextNode(element)
    var fetchlink = "localhost/get/"
    link.appendChild(text)
    link.setAttribute("href", "#/")
    link.setAttribute("class", "list-group-item ")
    link.setAttribute("id", element)
    link.setAttribute("type", "button")
    link.setAttribute("value", "clickme")
    link.setAttribute("onclick", "AddMarker(\"".concat(element).concat("\");"))
    //link.setAttribute("onclick", "httpGetAsync(fetchlink.concat(element), function(result) 
    document.getElementById("poi_sidebar").appendChild(link)
  })
})
