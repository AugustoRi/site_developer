//function google maps
window.onload = ()=>{
  var map;

  function initializeGoogleMaps(){

    //return 
    var mapProp = {
      center: new google.maps.LatLng(-3.8033,-38.5340),
      scrollWheel: false,
      zoom: 15,
      MapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(
      document.getElementById("maps-visita"),
      mapProp 
    );
  }
  initializeGoogleMaps();
}