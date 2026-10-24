function getNews() {
  let city = document.getElementById("city").value.trim().toLowerCase();

  if (city === "") {
    document.getElementById("result").innerHTML = "Enter city name";
    return;
  }

  let newsData = {
    hyderabad: "Traffic increased due to metro construction ",
    vizag: "Tourism rising at beach areas ",
    vijayawada: "Heavy traffic in city center ",
    guntur: "New market development project ",
    tirupati: "Temple crowd increased during festival ",
    kakinada: "Port activities expanding ",
    nellore: "Rain alerts issued ",
    rajahmundry: "Godavari water levels rising ",
    anantapur: "High temperature warning ",
    kadapa: "Dry weather continues "
  };

  let result = newsData[city];

  if (result) {
    document.getElementById("result").innerHTML =
      " News in " + city + ": " + result;
  } else {
    document.getElementById("result").innerHTML = "City not found";
  }
}