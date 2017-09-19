$(document).ready(function(){
    $('#send-questionnaire').mouseenter(function(){
      $('.img-feedback-2').hide();
      $('.img-feedback-1').show();
    });
    $('#feedback').mouseenter(function(){
      $('.img-feedback-1').hide();
      $('.img-feedback-2').show();
    });
});

function myMap() {
  var myCenter = new google.maps.LatLng(49.2674, 28.50149327);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(17);
    map.setCenter(marker.getPosition());
  });
}
