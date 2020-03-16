
// API key
var APIKey = "50fb093a801ea7cec3ad6773d6bd6102";
// var cityName = "";
// URL to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Nashville&appid=" + APIKey;

// console.log(queryURL)


// AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  $('#searchBtn').on('click', function (e) {
    e.preventDefault();
    console.log(queryURL);
    console.log(response);


    $(".city").html("<h1>" + response.name + "Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    // console.log("Wind Speed: " + response.wind.speed);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temperature (F): " + tempF);



  });



})