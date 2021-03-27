// Handle Weather request
function getWeather() {
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  let api_key = "5c07392206fda0262bbb734067bed0a3";
  let city_id = "4480219";

  let owm_url = "https://api.openweathermap.org/data/2.5/weather?id=" + city_id + "&units=imperial&appid=" + api_key
 // "            https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

  xhr.open(
    "GET", owm_url
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        document.getElementById("temp").innerHTML =
          json.main.temp.toFixed(0) + " F";
        document.getElementById("weather-description").innerHTML =
          json.weather[0].description;
      } else {
        console.log("weather error msg: " + xhr.status);
      }
    }
  };
  xhr.send();
}