var map;

function initMap() {
  navigator.geolocation.getCurrentPosition(success, error);   
  function success(position){
    var mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
      google.maps.event.addListener(map,'center_changed', function() {
        document.getElementById('default_latitude').value = map.getCenter().lat();
        document.getElementById('default_longitude').value = map.getCenter().lng();
      });
  }

  function error() {
      console.log("Cant find poition");
  }
}

window.onload = initMap();
