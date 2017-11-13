var map;
var urlParams;
var query;

function initMap() {
  navigator.geolocation.getCurrentPosition(success, error);   
  function success(position){
    let mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        mapTypeControl: true,
        scaleControl: true,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false
      };
      map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
  }
  function error() {
      alert("Cant find poition");
  }

}

window.onload = initMap();

function submitLoc() {
    let latS = map.getCenter().lat(); 
    let lngS = map.getCenter().lng();
    console.log(latS + " " + lngS); 
}

function manual() {
    let place = "/manual.html?" + query;
    window.location.href = "place";
}

(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        query  = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
    console.log(urlParams);   
})();