var map;
function initMap() {
  var mapOptions = {
      zoom: 18,
      center: new google.maps.LatLng(12.9716,77.5946),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);
    google.maps.event.addListener(map,'center_changed', function() {
      document.getElementById('default_latitude').value = map.getCenter().lat();
      document.getElementById('default_longitude').value = map.getCenter().lng();
    });
    $('<div/>').addClass('centerMarker').appendTo(map.getDiv())
      //do something onclick
      .click(function() {
        var that = $(this);
        if (!that.data('win')) {
          that.data('win', new google.maps.InfoWindow({
            content: 'this is the center'
          }));
          that.data('win').bindTo('position', map, 'center');
        }
        that.data('win').open(map);
      });
}
google.maps.event.addDomListener(window, 'load', initMap);
