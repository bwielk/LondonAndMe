
var initialize = function(){
  var center = {lat: 51.509865, lng:-0.118092};
  var formerBase = {lat:51.5837544, lng:-0.0913808};
  var favouriteSpot = {lat: 51.4880905, lng:-0.0104801};
  var work = {lat: 51.5146225, lng:-0.1449195};
  var favGucciStore = {lat: 51.5001354, lng:-0.1600627};
  var favPradaStore= {lat: 51.5090638, lng: -0.1408522};
  var zoom = 11;
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoom, container);

  mainmap.addMarker(center);
  mainmap.addMarker(formerBase);
  mainmap.addMarker(favouriteSpot);
  mainmap.addMarker(work);
  mainmap.addMarker(favGucciStore);
  mainmap.addMarker(favPradaStore);
  mainmap.addClickEvent();
}

var button = document.getElementById('chicago-button');
button.onclick = moveMeToChicago;


window.onload = initialize;


