var imap;

function initAutocomplete() {

    navigator.geolocation.getCurrentPosition(success, error);
    function success(position){
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 15,
            mapTypeId: 'roadmap',
            disableDefaultUI: true,
            mapTypeControl: true,
            scaleControl: true,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false
        });
    
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pacinput');
        var searchBox = new google.maps.places.SearchBox(input);
    
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });
    
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();
    
            if (places.length == 0) {
            return;
            }
    
            // Clear out the old markers.
            markers.forEach(function(marker) {
            marker.setMap(null);
            });
            markers = [];
    
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
    
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            });
            map.fitBounds(bounds);
        });
        imap = new google.maps.Map(document.getElementById('map'),map);        
    }
    
    function error(){
        
    }
}

function submitLoc() {
    let latS = imap.getCenter().lat(); 
    let lngS = imap.getCenter().lng();
    console.log(latS + " " + lngS); 
}