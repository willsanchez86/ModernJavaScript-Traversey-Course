class Weather {
    constructor(city, state) {
        // ! API_Key not stored as separate environment variable only because I'm maintaining this as a purely client-side application
        this.api_key = 'f797bf480b5346d3b4a6646bb13b41bf';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        // First need to fetch geoCode to pass in as parameter to OpenWeather APi
        const geoCode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state},US&appid=${this.api_key}`).then( response => response.json());

        const lat = geoCode[0].lat;
        const lon = geoCode[0].lon;

        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}&units=imperial`).then( response => response.json());
 
        
        return weatherData;
    }
}

