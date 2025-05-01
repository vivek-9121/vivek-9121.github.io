//ITMD 540 Vivek Sirikonda
// Lab 6

const locations = [
    { name: "Hyderabad, India", lat: 17.385044, lng: 78.486671 },
    { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784 },
    { name: "Vancouver, Canada", lat: 49.2827, lng: -123.1207 },
    { name: "New York, USA", lat: 40.7128, lng: -74.0060 },
    { name: "London, UK", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
    { name: "Mumbai, India", lat: 19.0760, lng: 72.8777 },
    { name: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241 },
    { name: "Paris, France", lat: 48.8566, lng: 2.3522 }
];

document.addEventListener("DOMContentLoaded", () => {
    const locationSelect = document.getElementById("locationSelect");
    const currentLocationBtn = document.getElementById("currentLocationBtn");
    const todayCard = document.getElementById("todayCard").querySelector(".data");
    const tomorrowCard = document.getElementById("tomorrowCard").querySelector(".data");
    const errorDiv = document.getElementById("error");

    // Populate the dropdown with the locations
    locations.forEach((loc, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = loc.name;
        locationSelect.appendChild(option);
    });

    // Event listener for when the location is selected from the dropdown
    locationSelect.addEventListener("change", () => {
        const { lat, lng } = locations[locationSelect.value];
        fetchData(lat, lng);
    });

    // Event listener for the "Use Current Location" button
    currentLocationBtn.addEventListener("click", () => {
        if (navigator.geolocation) {
            // If geolocation is supported, get the current position
            navigator.geolocation.getCurrentPosition(pos => {
                fetchData(pos.coords.latitude, pos.coords.longitude);
            }, () => {
                showError("Unable to retrieve your location.");
            });
        } else {
            // If geolocation is not supported by the browser, show an error
            showError("Geolocation is not supported by your browser.");
        }
    });

    // Function to fetch data from the API for today and tomorrow
    function fetchData(lat, lng) {
        errorDiv.classList.add("hidden");
        todayCard.innerHTML = "Loading...";
        tomorrowCard.innerHTML = "Loading...";

        // Fetch data for both today and tomorrow from the API
        Promise.all([
            fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`),
            fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`)
        ])
        .then(async ([resToday, resTomorrow]) => {
            const dataToday = await resToday.json();
            const dataTomorrow = await resTomorrow.json();

            if (!dataToday.results || !dataTomorrow.results) throw new Error("Invalid API data");

            displayData(dataToday.results, todayCard);
            displayData(dataTomorrow.results, tomorrowCard);
        })
        .catch(() => {
            showError("Failed to fetch data from the API.");
        });
    }

    // Function to display the data in the specified container (today or tomorrow)
    function displayData(data, container) {
        container.innerHTML = `
            <p><strong>Sunrise:</strong> ${data.sunrise}</p>
            <p><strong>Sunset:</strong> ${data.sunset}</p>
            <p><strong>Dawn:</strong> ${data.dawn}</p>
            <p><strong>Dusk:</strong> ${data.dusk}</p>
            <p><strong>Solar Noon:</strong> ${data.solar_noon}</p>
            <p><strong>Day Length:</strong> ${data.day_length}</p>
            <p><strong>Time Zone:</strong> ${data.timezone}</p>
        `;
    }

    // Function to show an error message if something goes wrong
    function showError(message) {
        errorDiv.textContent = message;
        errorDiv.classList.remove("hidden");
        todayCard.innerHTML = "";
        tomorrowCard.innerHTML = "";
    }
});
