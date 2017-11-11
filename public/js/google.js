var map;

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