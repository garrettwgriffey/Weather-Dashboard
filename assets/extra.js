
// API key
var APIKey = "50fb093a801ea7cec3ad6773d6bd6102";
// var cityName = "#userInput";

// URL for UV index
var uVQueryURL = "https://api.openweathermap.org/data/2.5/uvi?f&lat=36.17&lon=-86.78&appid=" + APIKey;

var queryTerm = " ";

// console.log(queryURL)
// var showTime = $("#currentDay").text(setTime);
// console.log(showTime);

function searchCity(queryURL) {
  var queryTerm = $("#input")
    .val()
    .trim();
  // queryURL for city search
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + queryTerm + "&appid=" + APIKey;
  console.log(queryURL);
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })
  }


  // Search button click event
  $('#searchBtn').on('click', function (e) {
    e.preventDefault();
    console.log("searchBtn clicked")

    var userInput = $('#userInput').val();
    console.log(userInput);
  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;
  // console.log(userInput);
  });
    // AJAX call for QueryURL
    
      // console.log(queryURL);
      // console.log(response);

      $(".city").html("<h1>" + response.name + "Weather Details</h1>");
      $(".date").text(moment().format("MMM Do YYYY"));
      $(".wind").text("Wind Speed: " + response.wind.speed + "mph");
      $(".humidity").text("Humidity: " + response.main.humidity);

    //   // Convert temp to Fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    //   // add temp to html
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));


      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

      $.ajax({
        url: uVQueryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        $(".UV").text("UV Index: " + response.value);

      })

    // });


  // })

//   KNOW THESE
//  I statements
  for (i=0; i < stuff; i++) {

  }

//   conditionals
  if () { 
     
  } else {

  }

// function
  var name = function () {
      
  }

  whatever()

//   Start with 1.-RESEARCH TIME -write down and study any methods or function i dont understand. ex .then, .ajax
// 2. DAILY WARMUP(.5 hour - 45 min)-finish incompleted class activities without asking for help-google things only.

$("#theBtn").click(function(){
    // test if button works
    // console.log('#theBtn')
})




