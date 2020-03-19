// API key
var APIKey = "50fb093a801ea7cec3ad6773d6bd6102";

// URL for UV index
var uVQueryURL = "https://api.openweathermap.org/data/2.5/uvi?f&lat=36.17&lon=-86.78&appid=" + APIKey;



// Shows the last search on the page
var queryTerm = " ";

// local storage

var savedCities = JSON.parse(localStorage.getItem(savedCities)) || [];

// City weather search
function citySearch(){
    var queryTerm = $('#userInput').val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + queryTerm + "&appid=" + APIKey;
    console.log(queryURL);
  $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);

        $("#city").text(response.name) 
        $("#date").text(moment().format("MMM Do YYYY"));
        $("#wind").text("Wind Speed: " + response.wind.speed + "mph");
        $("#humidity").text("Humidity: " + response.main.humidity);

        //  Kelvin to farenheit conversion
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      $("#temp").text("Temperature " + response.main.temp);
      $("#temp").text("Temperature " + tempF.toFixed(2) + " F");

      $.ajax({
        url: uVQueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        $("#UV").text("UV Index: " + response.value);

      });

      // var queryForecast = "https://www.api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&appid=" + APIKey + "&units=imperial";

      // $.ajax({
      //   url: queryForecast,
      //   method: "GET"
      // }).then(function(forecastData){

      //   console.log(forecastData);
      // });

    })
fiveDayForecast(queryTerm);
}

function fiveDayForecast(queryTerm){
  var queryForecast = "https://www.api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&appid=" + APIKey + "&units=imperial";

  $.ajax({
    url: queryForecast,
    method: "GET"
  }).then(function(forecastData){
    console.log(forecastData);
  });

}

  // Search button click event
  $('#searchBtn').on('click', function (e) {
    e.preventDefault();
    console.log("searchBtn clicked")

    var cityInput = $('#userInput').val().trim();

    $("#cities").text(cityInput);
    savedCities.unshift(cityInput)

    localStorage.setItem('savedCities', JSON.stringify(savedCities));
    

citySearch();
  }) 



  