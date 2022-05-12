class UI {
    // Dynamically load webpage with fetched weather data
    loadPage(data, city, state) {
        document.getElementById("w-location").innerHTML = `${city}, ${state}`;
        document.getElementById("w-desc").innerHTML = `${data.weather[0].description}`;
        document.getElementById("w-string").innerHTML = `${data.main.temp} F`;
        document.getElementById("w-icon").setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        document.getElementById("w-humidity").innerHTML = `Relative Humidity ${data.main.humidity}%`;
        document.getElementById("w-feels-like").innerHTML = `Feels Like ${data.main.feels_like} F`;
        document.getElementById("w-wind").innerHTML = `Wind Speed: ${data.wind.speed}`;
    }

    showAlert(msg, className) {
        // Clear any outstanding alerts
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        // Add Class 
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(msg));
        // Get Parent
        const body = document.querySelector('.modal-body');
        // Get Form Element
        const form = document.getElementById('w-form');
        // Insert Before
        body.insertBefore(div, form);

        // Clear Alert after 3 seconds
        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        const alert = document.querySelector('.alert');

        if(alert) {
            alert.remove();
        }
    }
}