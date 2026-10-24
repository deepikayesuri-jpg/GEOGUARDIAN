function downloadPDF(){

    const { jsPDF } = window.jspdf;

    let doc = new jsPDF();

    let city = document.getElementById("city").innerText;
    let safety = document.getElementById("safety").innerText;
    let crime = document.getElementById("crime").innerText;
    let weather = document.getElementById("weather").innerText;
    let ai = document.getElementById("aiReport").innerText;


    doc.text("GeoGuardian Safety Report",20,20);

    doc.text(city,20,40);
    doc.text(safety,20,50);
    doc.text(crime,20,60);
    doc.text(weather,20,70);

    doc.text("AI Safety Report:",20,90);
    doc.text(ai,20,100);


    doc.save("GeoGuardian_Report.pdf");

}