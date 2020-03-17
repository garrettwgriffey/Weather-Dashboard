
// API key
var APIKey = "50fb093a801ea7cec3ad6773d6bd6102";
// var cityName = "#userInput";
// URL to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Nashville&appid=" + APIKey;


var uVQueryURL = "https://api.openweathermap.org/data/2.5/uvi?f&lat=36.17&lon=-86.78&appid=" + APIKey;

// console.log(queryURL)
// var showTime = $("#currentDay").text(setTime);
// console.log(showTime);

// function setTime() {
//   var time = moment().format("MMMM Do YYYY, h:mm a");
//   return time;
// }
// console.log(setTime());

  // AJAX call for QueryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $('#searchBtn').on('click', function (e) {
      e.preventDefault();
      // id of userInput
     
      console.log(queryURL);
      console.log(response);


      $(".city").html("<h1>" + response.name + "Weather Details</h1>");
      $(".date").text(moment().format("MMM Do YYYY"));
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);

      // Convert temp to Fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      // add temp to html
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      // console.log("Temperature (F): " + tempF);

      $.ajax({
        url: uVQueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        $(".UV").text("UV Index: " + response.value);
    
      })


    });
  })
