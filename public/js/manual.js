var map;

function initAutocomplete() {

    navigator.geolocation.getCurrentPosition(success, error);
    function success(position){
        map = new google.maps.Map(document.getElementById('map'), {
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
    }
    
    function error(){
        
    }
}

function submitLoc() {
    if(map.getCenter().lat()){
        let latS = map.getCenter().lat(); 
        let lngS = map.getCenter().lng();
        console.log(latS + " " + lngS); 
    }
    else{
        let latS = position.coords.latitude; 
        let lngS = position.coords.longitude;
        console.log(latS + " " + lngS); 
    }    
}

(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

    console.log(urlParams);   
})();