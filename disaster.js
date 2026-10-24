function getDisaster() {
  let city = document.getElementById("city").value.trim().toLowerCase();

  if (city === "") {
    document.getElementById("result").innerHTML = "Enter city name";
    return;
  }

  let disasterData = {
    hyderabad: "Low Risk ",
    vizag: "Cyclone Risk ",
    vijayawada: "Flood Risk ",
    guntur: "Heat Waves ",
    tirupati: "Low Risk ",
    kakinada: "Flood & Cyclone Risk ",
    nellore: "Cyclone Risk ",
    rajahmundry: "Flood Risk ",
    anantapur: "Drought Risk ",
    kadapa: "Heat Waves "
  };

  let result = disasterData[city];

  if (result) {
    document.getElementById("result").innerHTML =
      "Disaster Risk in " + city + ": " + result;
  } else {
    document.getElementById("result").innerHTML = "City not found";
  }
}