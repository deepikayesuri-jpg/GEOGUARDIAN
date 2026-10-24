async function getHospitals(lat, lon) {

    document.getElementById("hospitalList").innerHTML =
    "🏥 Nearby Hospitals : Loading...";

    const query = `
    [out:json];
    (
       node["amenity"="hospital"](around:10000,${lat},${lon});
       way["amenity"="hospital"](around:10000,${lat},${lon});

    );
    out center;
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

        let hospitals = data.elements;

        if (hospitals.length == 0) {

            document.getElementById("hospitalList").innerHTML =
            "🏥 Nearby Hospitals : Not Found";

            return;
        }

        let output = "<b>🏥 Nearby Hospitals</b><br>";

        hospitals.slice(0,5).forEach(h => {
            output += "• " + (h.tags.name || "Hospital") + "<br>";

 
        });

        document.getElementById("hospitalList").innerHTML = output;

    }
     
     catch(error){

    console.error("Hospital Error:", error);

    document.getElementById("hospitalList").innerHTML =
    "Hospital data unavailable";

}

    

}