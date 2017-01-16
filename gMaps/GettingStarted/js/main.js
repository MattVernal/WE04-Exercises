//Initialise map
function initMap() {
    //create markers
    var yoobee = {lat: -43.520653, lng: 172.567866};
    var home = {lat: -43.477848, lng: 172.595243};
    //Specify div for map container
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: yoobee
    });
    //Place markers
    var yoobeeMarker = new google.maps.Marker({
        position: yoobee,
        map: map
    });
    var homeMarker = new google.maps.Marker({
        position: home,
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({map: map});
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
}
}
