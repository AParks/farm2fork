

function load() {
    // Centering isn't quite right
    var centerLatLng = new google.maps.LatLng(pointsArray[0], pointsArray[1]);
    var mapOptions = {
              zoom: 16,
              center: centerLatLng,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
    var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

    var counter = 0;
    var vertices = new Array();

    for (var i = 0; i < pointsArray.length-1; i=i+2) {
        var point = new google.maps.LatLng(pointsArray[i],pointsArray[i+1]);
        createMarker(point, map);
        vertices[counter]=point;
        counter++;
    }
}

// Creates a marker whose info window displays the coordinates of the marker.
function createMarker(point, map) {
    var markerInfoWindow = new google.maps.InfoWindow({
        content: "Coordinates: (" + point.lat() +","+ point.lng() +")"
    });
    
    var marker = new google.maps.Marker({
        position: point,
        map: map
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        markerInfoWindow.open(map, marker);
    });
}
