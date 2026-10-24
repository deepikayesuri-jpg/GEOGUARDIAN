 var map = L.map('map').setView([16.9891, 82.2475], 7);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
L.control.scale({
    imperial: false
}).addTo(map);


// Icons

var safeIcon = L.divIcon({
    html: "🟢",
    className: "safe-marker",
    iconSize: [45,45],
    iconAnchor: [22,45]
});


var mediumIcon = L.divIcon({
    html: "🟠",
    className: "medium-marker",
    iconSize: [45,45],
    iconAnchor: [22,45]
});


var dangerIcon = L.divIcon({
    html: "🔴",
    className: "danger-marker",
    iconSize: [45,45],
    iconAnchor: [22,45]
});



// Kakinada

 L.marker([16.9891,82.2475],{
    icon:safeIcon
})
.addTo(map)
.bindPopup(`
<h3>🟢 Kakinada</h3>
<p>🛡 Safety Score: <b>9.2 / 10</b></p>
<p>⚠ Crime Level: Low</p>
<p>🏥 Hospitals: 12</p>
<p>👮 Police Stations: 10</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([16.9891, 82.2475], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟢 Safe Zone");



// Hyderabad

 L.marker([17.3850,78.4867],{
    icon:mediumIcon
})
.addTo(map)
.bindPopup(`
<h3>🟠 Hyderabad</h3>
<p>🛡 Safety Score: <b>8.5 / 10</b></p>
<p>⚠ Crime Level: Medium</p>
<p>🏥 Hospitals: 35</p>
<p>👮 Police Stations: 28</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([17.3850, 78.4867], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.3,
    radius: 7000
})
.addTo(map)
.bindPopup("🟠 Medium Risk Zone");



// Visakhapatnam

 L.marker([17.6868,83.2185],{
    icon:safeIcon
})
.addTo(map)
.bindPopup(`
<h3>🟢 Visakhapatnam</h3>
<p>🛡 Safety Score: <b>9.0 / 10</b></p>
<p>⚠ Crime Level: Low</p>
<p>🏥 Hospitals: 30</p>
<p>👮 Police Stations: 25</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([17.6868, 83.2185], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟢 Safe Zone");


// Vijayawada

 L.marker([16.5062,80.6480],{
    icon:safeIcon
})
.addTo(map)
.bindPopup(`
<h3>🟢 Vijayawada</h3>
<p>🛡 Safety Score: <b>8.9 / 10</b></p>
<p>⚠ Crime Level: Low</p>
<p>🏥 Hospitals: 20</p>
<p>👮 Police Stations: 18</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([16.5062, 80.6480], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟢 Safe Zone");

// Tirupati

 L.marker([13.6288,79.4192],{
    icon:safeIcon
})
.addTo(map)
.bindPopup(`
<h3>🟢 Tirupati</h3>
<p>🛡 Safety Score: <b>8.8 / 10</b></p>
<p>⚠ Crime Level: Low</p>
<p>🏥 Hospitals: 18</p>
<p>👮 Police Stations: 15</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([13.6288, 79.4192], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟢 Safe Zone");


// Rajahmundry

 L.marker([17.0005,81.8040],{
    icon:safeIcon
})
.addTo(map)
.bindPopup(`
<h3>🟢 Rajahmundry</h3>
<p>🛡 Safety Score: <b>8.7 / 10</b></p>
<p>⚠ Crime Level: Low</p>
<p>🏥 Hospitals: 16</p>
<p>👮 Police Stations: 14</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([17.0005, 81.8040], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟢 Safe Zone");


// Nellore

 L.marker([14.4426,79.9865],{
    icon:mediumIcon
})
.addTo(map)
.bindPopup(`
<h3>🟠 Nellore</h3>
<p>🛡 Safety Score: <b>8.6 / 10</b></p>
<p>⚠ Crime Level: Medium</p>
<p>🏥 Hospitals: 17</p>
<p>👮 Police Stations: 15</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([14.4426, 79.9865], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟠 Medium Risk Zone");

// Kadapa

 L.marker([14.4673,78.8242],{
    icon:mediumIcon
})
.addTo(map)
.bindPopup(`
<h3>🟠 Kadapa</h3>
<p>🛡 Safety Score: <b>8.4 / 10</b></p>
<p>⚠ Crime Level: Medium</p>
<p>🏥 Hospitals: 14</p>
<p>👮 Police Stations: 12</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([14.4673, 78.8242], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟠 Medium Risk Zone");


// Anantapur

 L.marker([14.6819,77.6006],{
    icon:mediumIcon
})
.addTo(map)
.bindPopup(`
<h3>🟠 Anantapur</h3>
<p>🛡 Safety Score: <b>8.3 / 10</b></p>
<p>⚠ Crime Level: Medium</p>
<p>🏥 Hospitals: 13</p>
<p>👮 Police Stations: 11</p>
<p>🌦 Weather Risk: Low</p>
<p>🚨 Emergency Services: Available</p>
`);
L.circle([14.6819, 77.6006], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.3,
    radius: 5000
})
.addTo(map)
.bindPopup("🟠 Medium Risk Zone");
function searchLocation(){

    var city = document.getElementById("searchBox").value.toLowerCase();


    if(city == "kakinada"){

        map.setView([16.9891,82.2475],13);
        getWeather(16.9891,82.2475);
        getHospitals(16.9891,82.2475);
        getPoliceStations(16.9891,82.2475);
        getNews("Kakinada");
        generateAIReport(
"Kakinada",
9.2,
"Low",
"Low"
);

        document.getElementById("city").innerHTML =
        "City : Kakinada";

        document.getElementById("safety").innerHTML =
        "Safety Score : 🟢 9.2 / 10";

        document.getElementById("crime").innerHTML =
        "Crime Level : Low";

        document.getElementById("hospital").innerHTML =
        "Hospitals : 12";

        document.getElementById("police").innerHTML =
        "Police Stations : 10";

    }


    else if(city == "hyderabad"){

        map.setView([17.3850,78.4867],13);
        getWeather(17.3850,78.4867);
        getHospitals(17.3850,78.4867);
        getPoliceStations(17.3850,78.4867);
        getNews("hyderabad");
        generateAIReport(
"Hyderabad",
8.5,
"Medium",
"Low"
);

        document.getElementById("city").innerHTML =
        "City : Hyderabad";

        document.getElementById("safety").innerHTML =
        "Safety Score : 🟠 8.5 / 10";

        document.getElementById("crime").innerHTML =
        "Crime Level : Medium";

        document.getElementById("hospital").innerHTML =
        "Hospitals : 35";

        document.getElementById("police").innerHTML =
        "Police Stations : 28";

    }


    else if(city == "visakhapatnam"){

        map.setView([17.6868,83.2185],13);
        getWeather(17.6868,83.2185);
        getHospitals(17.6868,83.2185);
        getPoliceStations(17.6868,83.2185);
        getNews("visakhapatnam");
        generateAIReport(
"Visakhapatnam",
9.0,
"Low",
"Low"
);

        document.getElementById("city").innerHTML =
        "City : Visakhapatnam";

        document.getElementById("safety").innerHTML =
        "Safety Score : 🟢 9.0 / 10";

        document.getElementById("crime").innerHTML =
        "Crime Level : Low";

        document.getElementById("hospital").innerHTML =
        "Hospitals : 30";

        document.getElementById("police").innerHTML =
        "Police Stations : 25";

    }
     else if(city == "nellore"){

        map.setView([14.4426,79.9865],13);
        getWeather(14.4426,79.9865);
        getHospitals(14.4426,79.9865);
        getPoliceStations(14.4426,79.9865);
        getNews("nellore");
        generateAIReport(
"Nellore",
8.6,
"Medium",
"Low"
);

        document.getElementById("city").innerHTML =
        "City : Nellore";

        document.getElementById("safety").innerHTML =
        "Safety Score : 🟠 8.6 / 10";

        document.getElementById("crime").innerHTML =
        "Crime Level : Medium";

        document.getElementById("hospital").innerHTML =
        "Hospitals : 17";

        document.getElementById("police").innerHTML =
        "Police Stations : 15";

    }
    else if(city == "kadapa"){

    map.setView([14.4673,78.8242],13);
    getWeather(14.4673,78.8242);
    getHospitals(14.4673,78.8242);
    getPoliceStations(14.4673,78.8242);
    getNews("kadapa");
    generateAIReport(
"Kadapa",
8.4,
"Medium",
"Low"
);


    document.getElementById("city").innerHTML =
    "City : Kadapa";

    document.getElementById("safety").innerHTML =
    "Safety Score : 🟠 8.4 / 10";

    document.getElementById("crime").innerHTML =
    "Crime Level : Medium";

    document.getElementById("hospital").innerHTML =
    "Hospitals : 14";

    document.getElementById("police").innerHTML =
    "Police Stations : 12";

}


else if(city == "anantapur"){

    map.setView([14.6819,77.6006],13);
    getWeather(14.6819,77.6006);
    getHospitals(14.6819,77.6006);
    getPoliceStations(14.6819,77.6006);
    getNews("anantapur");
    generateAIReport(
"Anantapur",
8.3,
"Medium",
"Low"
);

    document.getElementById("city").innerHTML =
    "City : Anantapur";

    document.getElementById("safety").innerHTML =
    "Safety Score : 🟠 8.3 / 10";

    document.getElementById("crime").innerHTML =
    "Crime Level : Medium";

    document.getElementById("hospital").innerHTML =
    "Hospitals : 13";

    document.getElementById("police").innerHTML =
    "Police Stations : 11";

}
else if (city == "vijayawada") {

        map.setView([16.5062, 80.6480], 13);
        getWeather(16.5062,80.6480);
        getHospitals(16.5062,80.6480);
        getPoliceStations(16.5062,80.6480);
        getNews("vijayawada");
        generateAIReport(
"Vijayawada",
8.9,
"Low",
"Low"
);

        document.getElementById("city").innerHTML =
        "City : Vijayawada";

        document.getElementById("safety").innerHTML =
        "Safety Score : 🟢 8.9 / 10";

        document.getElementById("crime").innerHTML =
        "Crime Level : Low";

        document.getElementById("hospital").innerHTML =
        "Hospitals : 20";

        document.getElementById("police").innerHTML =
        "Police Stations : 18";
    }
    else if (city == "rajahmundry") {

    map.setView([17.0005, 81.8040], 13);
    getWeather(17.0005,81.8040);
    getHospitals(17.0005,81.8040);
    getPoliceStations(17.0005,81.8040);
    getNews("rajahmundry");
    generateAIReport(
"Tirupati",
8.8,
"Low",
"Low"
);

    document.getElementById("city").innerHTML =
    "City : Rajahmundry";

    document.getElementById("safety").innerHTML =
    "Safety Score : 🟢 8.7 / 10";

    document.getElementById("crime").innerHTML =
    "Crime Level : Low";

    document.getElementById("hospital").innerHTML =
    "Hospitals : 16";

    document.getElementById("police").innerHTML =
    "Police Stations : 14";
}
else if (city == "tirupati") {

    map.setView([13.6288, 79.4192], 13);
    getWeather(13.6288,79.4192);
    getHospitals(13.6288,79.4192);
    getPoliceStations(13.6288,79.4192);
    getNews("tirupati");
    generateAIReport(
"Tirupati",
8.8,
"Low",
"Low"
);

    document.getElementById("city").innerHTML =
    "City : Tirupati";

    document.getElementById("safety").innerHTML =
    "Safety Score : 🟢 8.8 / 10";

    document.getElementById("crime").innerHTML =
    "Crime Level : Low";

    document.getElementById("hospital").innerHTML =
    "Hospitals : 18";

    document.getElementById("police").innerHTML =
    "Police Stations : 15";
}

    else{

        alert("City not found!");
    }

}

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            map.setView([lat, lon], 15);
            getWeather(lat, lon);
            getHospitals(lat, lon);
            getPoliceStations(lat, lon);



            L.marker([lat, lon])
            .addTo(map)
            .bindPopup("📍 You are here")
            .openPopup();

        });

    } else {

        alert("Geolocation is not supported by this browser.");

    }

}
 