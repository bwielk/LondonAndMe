var MapWrapper = function(coords, zoom, container){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(position);
    }.bind(this));
  },

  setCenter: function(coords){
    var center = new google.maps.LatLng(coords);
  },

  moveMeToChicago: function(){
    this.setCenter(41.875715, -87.624206);
  }
}
