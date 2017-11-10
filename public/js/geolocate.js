function geoFindMe() {
    
      if (!navigator.geolocation){
          alert("NAvigator is not aupported :(");
          return;
      }
    
      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude + " " + longitude);
      }
    
      function error() {
          console.log("Unable to fetch address");
      }
    
      navigator.geolocation.getCurrentPosition(success, error);
}      

window.onload = geoFindMe();

