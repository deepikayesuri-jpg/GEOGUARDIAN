 function getWeather() {
  let city = document.getElementById("city").value.trim().toLowerCase();

  if (city === "") {
    document.getElementById("result").innerHTML = "Enter city name";
    return;
  }

  let weatherData = {
    hyderabad: "Sunny ",
    vizag: "Humid ",
    vijayawada: "Very Hot ",
    guntur: "Hot ",
    tirupati: "Warm ",
    kakinada: "Hot ",
    nellore: "Humid ",
    rajahmundry: "Hot ",
    anantapur: "Dry ",
    kadapa: "Hot "
  };

  let result = weatherData[city];

  if (result) {
    document.getElementById("result").innerHTML = "Weather in " + city + ": " + result;
  } else {
    document.getElementById("result").innerHTML = "City not found";
  }
}