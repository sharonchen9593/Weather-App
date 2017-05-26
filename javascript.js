



// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     $(".city").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//   });
// }


// // var autoLocation = "api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=" + lat +"&lon="+ lon



// // $.getJSON("api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=" + lat +"&lon="+ lon)







$(document).ready(function() {


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    autoLocation = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=" + lat +"&lon="+ lon
    console.log(autoLocation)
    $.getJSON(autoLocation, function(json) {
      $(".city").html("<p>latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude +"</p>");
    })
  });
}



})
