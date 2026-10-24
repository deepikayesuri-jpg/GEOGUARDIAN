const cities = {

    Kakinada:{
        lat:16.9891,
        lon:82.2475
    },

    Hyderabad:{
        lat:17.3850,
        lon:78.4867
    },

    Visakhapatnam:{
        lat:17.6868,
        lon:83.2185
    },

    Vijayawada:{
        lat:16.5062,
        lon:80.6480
    },

    Tirupati:{
        lat:13.6288,
        lon:79.4192
    },

    Rajahmundry:{
        lat:17.0005,
        lon:81.8040
    },

    Nellore:{
        lat:14.4426,
        lon:79.9865
    },

    Kadapa:{
        lat:14.4673,
        lon:78.8242
    },

    Anantapur:{
        lat:14.6819,
        lon:77.6006
    }

};



async function getPoliceStations(lat, lon) {

    document.getElementById("policeList").innerHTML =
    "👮 Nearby Police Stations : Loading...";


    const query = `
    [out:json];
    (
       node["amenity"="police"](around:10000,${lat},${lon});
       way["amenity"="police"](around:10000,${lat},${lon});
    );
    out;
    `;


 const url = "https://overpass-api.de/api/interpreter";
    try {

         const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "text/plain"
    },
    body: query
});

        const data = await response.json();


        let police = data.elements;


        if(police.length == 0){

            document.getElementById("policeList").innerHTML =
            "👮 Nearby Police Stations : Not Found";

            return;
        }


        let output = "<b>👮 Nearby Police Stations</b><br>";


        police.slice(0,5).forEach(p => {

            output += "• " + 
            (p.tags.name || "Police Station") + 
            "<br>";

        });


        document.getElementById("policeList").innerHTML = output;


    }

     catch(error){

    console.error("Police Error:", error);

    document.getElementById("policeList").innerHTML =
    "Police data unavailable";

}

}



// Testing city

getPoliceStations(
    cities.Hyderabad.lat,
    cities.Hyderabad.lon
);