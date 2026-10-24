function generateAIReport(city, safety, crime, weatherRisk) {

    let report = "";

    if (safety >= 8.5) {

        report = `
        🤖 AI Safety Report<br><br>

        📍 City: ${city}<br><br>

        🟢 Overall Safety: Safe<br><br>

        Reason:<br>
        • Crime level is ${crime}<br>
        • Weather risk is ${weatherRisk}<br>
        • Emergency services are available<br><br>

        ✈️ Travel Tips:<br>
        ✓ Keep emergency contacts<br>
        ✓ Check weather before travel<br>
        ✓ Avoid unknown places at night
        `;

    } 
    else {

        report = `
 
        📍 City: ${city}<br><br>

        🟠 Overall Safety: Moderate<br><br>

        Travel Carefully:<br>
        • Stay alert in crowded areas<br>
        • Follow local safety guidelines
        `;
    }


    document.getElementById("aiReport").innerHTML = report;
}