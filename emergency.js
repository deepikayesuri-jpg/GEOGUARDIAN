function getEmergency() {
  let city = document.getElementById("city").value.trim().toLowerCase();

  if (city === "") {
    document.getElementById("result").innerHTML = "Enter city name";
    return;
  }

  let emergencyData = {
    hyderabad: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    vizag: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    vijayawada: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    guntur: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    tirupati: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    kakinada: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    nellore: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    rajahmundry: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    anantapur: {
      police: "100",
      ambulance: "108",
      fire: "101"
    },
    kadapa: {
      police: "100",
      ambulance: "108",
      fire: "101"
    }
  };

  let data = emergencyData[city];

  if (data) {
    document.getElementById("result").innerHTML =
      " Police: " + data.police + "<br>" +
      " Ambulance: " + data.ambulance + "<br>" +
      " Fire: " + data.fire;
  } else {
    document.getElementById("result").innerHTML = "City not found";
  }
}