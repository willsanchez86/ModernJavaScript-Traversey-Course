class Weather {
    constructor(city, state) {
        // ! API_Key not stored as separate environment variable only because I'm maintaining this as a purely client-side application
        this.api_key = 'f797bf480b5346d3b4a6646bb13b41bf';
        this.city = city;
        this.state = state;
    }

    // Fetch geoCode to pass in as parameter to OpenWeather APi
    async getGeocode() {
        const geocodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state},US&appid=${this.api_key}`).then( response => response.json());

        // API Call returns an empty string if city name or state code is invalid
        if(geocodeResponse.length < 1) {
            return null
        } else {
            return {
                lat: geocodeResponse[0].lat,
                lon: geocodeResponse[0].lon
            }
        }
    }

    // Fetch Weather Data from OpenWeather API
    async getWeather(geodata) {  
        const lat = geodata.lat;
        const lon = geodata.lon;

        // Fetch Weather Data in imperial units
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}&units=imperial`).then(response => response.json());
 
        
        return weatherData;
    }


    // Change Location
    changeLocation(cityInput, stateInput) {
        this.city = cityInput;
        this.state = stateInput;
    }
}

