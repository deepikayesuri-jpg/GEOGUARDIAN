 async function searchCity() {

    const city = document.getElementById("city").value.toLowerCase().trim();

    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "<h2>❌ Please enter a city name.</h2>";
        return;
    }

    try {

        const response = await fetch("crime.json");

        const crimeData = await response.json();

        if (crimeData[city]) {

            const data = crimeData[city];

            result.innerHTML = `
                <h2>🛡 Crime Report - ${city.toUpperCase()}</h2>

                <p><strong>Risk Level:</strong> ${data.risk}</p>

                <p><strong>Recent Incidents:</strong> ${data.incidents}</p>

                <p><strong>Safety Tip:</strong> ${data.tip}</p>
            `;

        } else {

            result.innerHTML = `
                <h2>❌ City Not Found</h2>
                <p>Please enter a valid city.</p>
            `;

        }

    } catch (error) {

        result.innerHTML = `
            <h2>⚠ Error</h2>
            <p>Unable to load crime data.</p>
        `;

        console.error(error);

    }

}