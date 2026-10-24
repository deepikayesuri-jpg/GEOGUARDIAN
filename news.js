
async function searchLiveNews() {
    const place = document.getElementById("newsPlace").value.trim();
    const box = document.getElementById("newsSummary");

    if (!place) {
        box.textContent = "Please enter a place name.";
        return;
    }

    box.textContent = "Searching latest news...";

    try {
        const apiKey = "pub_ec507de509a740d1a76b39e2066e91b2";

        const url =
            "https://newsdata.io/api/1/latest?apikey=" +
            encodeURIComponent(apiKey) +
            "&q=" + encodeURIComponent(place) +
            "&language=en";

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status !== "success") {
            throw new Error(data.results?.message || "News API request failed");
        }

        box.replaceChildren();

        if (!data.results || data.results.length === 0) {
            box.textContent = "No recent news found for " + place;
            return;
        }

        data.results.forEach(article => {
            const item = document.createElement("div");
            item.className = "news-card";

            const title = document.createElement("h3");
            title.textContent = article.title || "Untitled news";

            const source = document.createElement("p");
            source.textContent =
                "Source: " + (article.source_name || "News provider");

            const date = document.createElement("p");
            date.textContent = "Published: " + (article.pubDate || "Unknown");

            const link = document.createElement("a");
            link.href = article.link;
            link.textContent = "Read Full Article";
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            item.append(title, source, date, link);
            box.appendChild(item);
        });
    } catch (error) {
        console.error(error);
        box.textContent =
            "Unable to load news. Check your API key, API limits, or connection.";
    }
}
