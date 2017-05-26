// // get temp from API

// var changeCity = function() {
//   $(".city").html("<p>latitude: " + lat + "<br>longitude: " + lon +"</p>")
// }




// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(successPosition);
// }

// function successPosition(position) {

//     lat = position.coords.latitude;
//     lon = position.coords.longitude;
//     autoLocation = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=" + lat +"&lon="+ lon

//     $.getJSON(autoLocation, changeCity)
// }



$.ajax({
  url: "https://geoip-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function( location ) {


    //change city name to user city name
    $('.city').html(location.city + ", " + location.state);

    lat = location.latitude;
    lon = location.longitude;

    var weatherAPI = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=" + lat +"&lon="+ lon


    //change weather to user city weather
    $.getJSON(weatherAPI, function(json) {

      var temp = Math.round(json.main.temp)
      var tempMin = json.main.temp_min
      var tempMax = json.main.temp_max
      var weatherDes = json.weather[0].main

      if (weatherDes === "Haze" || weatherDes === "Mist") {
        weatherDes = "Partly Cloudy";
      }

      $(".temp").html(temp + " " + String.fromCharCode(176) + "F")
      $(".sky").html(weatherDes)


      if (temp>=80) {
        $("body").css({
          'background': 'url("images/hot.jpg")',
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat'

        })
      }

      if (temp>50 && temp <80) {
        // change to normal background
        $("body").css({
          'background': 'url("images/background.jpg")',
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat'
        })
      }

      if (temp<=50) {
        $("body").css({
          'background': 'url("images/cold.jpg")',
          'background-size': '100% 100%',
          'background-repeat': 'no-repeat'
        })


      }


    })
  }
});


//https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=68b320a63d26b299f8f806732a6d3b5e&units=imperial&lat=37.5963&lon=-122.065