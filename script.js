function searchCity() {

    let city = document.getElementById("city").value.trim();

    if (city === "") {

        document.getElementById("result").innerHTML =
            "Please enter a city name";

    } else {

        document.getElementById("result").innerHTML =
            "🔍 Searching for " + city;
    }

    alert("Analyze Working");
}


// =====================================================
// ANALYZE LOCATION
// =====================================================

function analyzeLocation() {

    let city = document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city name.");
        return;
    }

    document.getElementById("analysisSection").style.display = "block";

    document.getElementById("selectedCity").innerHTML =
        city + " Safety Report";
fetchNews(city);

    // =====================================================
    // CRIME DATA
    // =====================================================

    fetch("crime.json")

    .then(response => {

        if (!response.ok) {
            throw new Error("crime.json not found");
        }

        return response.json();

    })

    .then(data => {

        let cityKey = city.toLowerCase().trim();

        if (data[cityKey]) {

            document.getElementById("crimeSummary").innerHTML = `
                <b>🛡 Crime Risk:</b> ${data[cityKey].risk}<br><br>

                <b>💡 Safety Tip:</b><br>
                ${data[cityKey].tip}
            `;

        } else {

            document.getElementById("crimeSummary").innerHTML =
                "⚠ No Crime Data Available for " + city;
        }

    })

    .catch(error => {

        console.error("Crime Data Error:", error);

        document.getElementById("crimeSummary").innerHTML =
            "⚠ Crime Data Error";
    });


    // =====================================================
    // REAL-TIME WEATHER DATA
    // =====================================================

    fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=" +
        encodeURIComponent(city) +
        "&count=1&language=en&format=json"
    )

    .then(response => {

        if (!response.ok) {
            throw new Error("Location search failed");
        }

        return response.json();

    })

    .then(locationData => {

        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            document.getElementById("weatherSummary").innerHTML =
                "❌ City not found";

            document.getElementById("disasterSummary").innerHTML =
                "❌ City not found";

            throw new Error("City not found");

        }

        const location = locationData.results[0];

        return fetch(
            "https://api.open-meteo.com/v1/forecast?" +
            "latitude=" + location.latitude +
            "&longitude=" + location.longitude +
            "&current=" +
            "temperature_2m," +
            "relative_humidity_2m," +
            "weather_code," +
            "wind_speed_10m," +
            "precipitation" +
            "&timezone=auto"
        );

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Weather API request failed");
        }

        return response.json();

    })

    .then(weatherData => {

        if (
            !weatherData ||
            !weatherData.current
        ) {

            throw new Error("Weather data unavailable");
        }

        const current = weatherData.current;


        // =================================================
        // WEATHER DISPLAY
        // =================================================

        document.getElementById("weatherSummary").innerHTML = `
            <b>🌡 Temperature:</b>
            ${current.temperature_2m}°C<br><br>

            <b>☁ Condition:</b>
            ${getWeatherCondition(current.weather_code)}<br><br>

            <b>💧 Humidity:</b>
            ${current.relative_humidity_2m}%<br><br>

            <b>💨 Wind Speed:</b>
            ${current.wind_speed_10m} km/h<br><br>

            <small>🟢 Live Weather Data</small>
        `;


        // =================================================
        // LIVE DISASTER / HAZARD ANALYSIS
        // =================================================

        const code = current.weather_code;

        const wind = current.wind_speed_10m;

        const rain = current.precipitation || 0;


        let disasterRisk = "Low";

        let alertType = "No Major Hazard";

        let safetyTip =
            "Follow normal safety precautions.";


        // Thunderstorm / Lightning

        if (code >= 95) {

            disasterRisk = "High";

            alertType =
                "⛈ Thunderstorm / Lightning";

            safetyTip =
                "Stay indoors and avoid open areas during lightning.";
        }


        // Heavy Rain

        else if (code >= 80) {

            disasterRisk = "Moderate";

            alertType =
                "🌧 Heavy Rain / Rain Showers";

            safetyTip =
                "Avoid waterlogged roads and low-lying areas.";
        }


        // Rain

        else if (code >= 61) {

            disasterRisk = "Moderate";

            alertType =
                "🌧 Rain Alert";

            safetyTip =
                "Travel carefully and watch for waterlogging.";
        }


        // Strong Wind

        if (wind >= 40) {

            disasterRisk = "High";

            alertType =
                "💨 Strong Wind";

            safetyTip =
                "Avoid unnecessary travel and stay away from unstable structures.";
        }


        // =================================================
        // DISASTER DISPLAY
        // =================================================

        document.getElementById("disasterSummary").innerHTML = `

            <b>🚨 Disaster Risk:</b>
            ${disasterRisk}<br><br>

            <b>⚠ Alert:</b>
            ${alertType}<br><br>

            <b>📍 Location:</b>
            ${city}<br><br>

            <b>🌧 Precipitation:</b>
            ${rain} mm<br><br>

            <b>💨 Wind Speed:</b>
            ${wind} km/h<br><br>

            <b>💡 Safety Tip:</b><br>
            ${safetyTip}<br><br>

            <small>🟢 Live Hazard Analysis</small>
        `;

    })

    .catch(error => {

        console.error(
            "Weather / Disaster Error:",
            error
        );

        document.getElementById("weatherSummary").innerHTML =
            "⚠ Weather Error: " + error.message;

        document.getElementById("disasterSummary").innerHTML =
            "⚠ Unable to load live disaster data";
    });


    // =====================================================
    // NEWS
    // =====================================================

    
async function fetchLiveNews(city) {
    const box = document.getElementById("newsSummary");
    if (!box) return;

    box.textContent = "Loading live news...";

    const searchUrl =
        "https://news.google.com/search?q=" +
        encodeURIComponent(city + " India when:7d") +
        "&hl=en-IN&gl=IN&ceid=IN:en";

    try {
        const rssUrl =
            "https://news.google.com/rss/search?q=" +
            encodeURIComponent(city + " India when:7d") +
            "&hl=en-IN&gl=IN&ceid=IN:en";

        const response = await fetch(
            "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(rssUrl)
        );

        if (!response.ok) {
            throw new Error("News request failed");
        }

        const xmlText = await response.text();
        const xml = new DOMParser().parseFromString(
            xmlText,
            "application/xml"
        );

        if (xml.querySelector("parsererror")) {
            throw new Error("Invalid news feed");
        }

        const articles = Array.from(
            xml.querySelectorAll("item")
        ).slice(0, 5);

        box.replaceChildren();

        if (articles.length === 0) {
            box.textContent = "No recent news found.";
        }

        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "news-card";

            const title = document.createElement("h4");
            title.textContent =
                article.querySelector("title")?.textContent ||
                "News headline";

            const date = document.createElement("p");
            date.textContent =
                article.querySelector("pubDate")?.textContent || "";

            const link = document.createElement("a");
            link.textContent = "Read Full Article";
            link.href =
                article.querySelector("link")?.textContent?.trim() ||
                searchUrl;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.append(title, date, link);
            box.appendChild(card);
        });

        if (articles.length === 0) {
            addFallbackLink();
        }

    } catch (error) {
        console.error("Live news error:", error);
        box.replaceChildren();

        const message = document.createElement("p");
        message.textContent = "Live news unavailable right now.";
        box.appendChild(message);

        addFallbackLink();
    }

    function addFallbackLink() {
        const link = document.createElement("a");
        link.href = searchUrl;
        link.textContent = "View Latest News on Google News";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        box.appendChild(link);
    }
}

async function fetchNews(city) {
    const newsBox = document.getElementById("newsSummary");

    if (!newsBox) return;

    try {
        const response = await fetch("news.json");
        const newsData = await response.json();

        const cityKey = city.trim().toLowerCase();
        const news = newsData[cityKey];

        newsBox.replaceChildren();

        if (!news) {
            newsBox.textContent = "No news available for this city.";
            return;
        }

        const headline = document.createElement("h4");
        headline.textContent = news.headline;

        const update = document.createElement("p");
        update.textContent = "Update: " + news.update;

        const advice = document.createElement("p");
        advice.textContent = "Advice: " + news.advice;

        newsBox.append(headline, update, advice);

    } catch (error) {
        console.error("News loading error:", error);
        newsBox.textContent = "Unable to load news.";
    }
}



    // =====================================================
    // EMERGENCY
    // =====================================================

    fetch("emergency.json")

    .then(response => {

        if (!response.ok) {
            throw new Error("emergency.json not found");
        }

        return response.json();

    })

    .then(data => {

        let cityKey = city.toLowerCase().trim();

        if (data[cityKey]) {

            document.getElementById("emergencySummary").innerHTML = `

                <b>👮 Police:</b>
                ${data[cityKey].police}<br><br>

                <b>🚑 Ambulance:</b>
                ${data[cityKey].ambulance}<br><br>

                <b>🚒 Fire:</b>
                ${data[cityKey].fire}

            `;

        } else {

            document.getElementById("emergencySummary").innerHTML =
                "No Emergency Data";
        }

    })

    .catch(error => {

        console.error(
            "Emergency Data Error:",
            error
        );

        document.getElementById("emergencySummary").innerHTML =
            "⚠ Emergency Data Error";
    });


    // =====================================================
    // AI SAFETY SCORE
    // =====================================================

    fetch("safety.json")

    .then(response => {

        if (!response.ok) {
            throw new Error("safety.json not found");
        }

        return response.json();

    })

    .then(data => {

        let cityKey = city.toLowerCase().trim();

        if (data[cityKey]) {

            document.getElementById("safetyScore").innerHTML = `

                <b>⭐ AI Score:</b>
                ${data[cityKey].score}/10<br><br>

                <b>🛡 Status:</b>
                ${data[cityKey].status}<br><br>

                <b>💡 Recommendation:</b><br>
                ${data[cityKey].advice}

            `;

        } else {

            document.getElementById("safetyScore").innerHTML =
                "No Safety Score";
        }

    })

    .catch(error => {

        console.error(
            "Safety Score Error:",
            error
        );

        document.getElementById("safetyScore").innerHTML =
            "⚠ Safety Score Error";
    });

}


// =====================================================
// MAP FUNCTIONS
// =====================================================

function openPoliceMap() {

    let city =
        document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city first.");
        return;
    }

    window.open(
        "https://www.google.com/maps/search/" +
        encodeURIComponent(city + " Police Station"),
        "_blank"
    );
}


function openHospitalMap() {

    let city =
        document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city first.");
        return;
    }

    window.open(
        "https://www.google.com/maps/search/" +
        encodeURIComponent(city + " Hospital"),
        "_blank"
    );
}


function openFireMap() {

    let city =
        document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city first.");
        return;
    }

    window.open(
        "https://www.google.com/maps/search/" +
        encodeURIComponent(city + " Fire Station"),
        "_blank"
    );
}


// =====================================================
// WEATHER CONDITION FUNCTION
// =====================================================

function getWeatherCondition(code) {

    if (code === 0)
        return "Clear Sky";

    if (code === 1 || code === 2 || code === 3)
        return "Cloudy";

    if (code === 45 || code === 48)
        return "Fog";

    if (code >= 51 && code <= 57)
        return "Drizzle";

    if (code >= 61 && code <= 67)
        return "Rain";

    if (code >= 71 && code <= 77)
        return "Snow";

    if (code >= 80 && code <= 82)
        return "Rain Showers";

    if (code >= 95)
        return "Thunderstorm";

    return "Unknown";
}
