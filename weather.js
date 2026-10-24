async function getWeather(lat, lon) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("weather").innerHTML =
    "🌦 Temperature : " + data.current.temperature_2m + " °C";

}