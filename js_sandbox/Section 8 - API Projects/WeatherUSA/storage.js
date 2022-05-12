class Store {

    // Retrieve location from Local Storage -- Default Location is New York, NY
    static getLocation() {
        let location;
        if(localStorage.getItem('location') === null) {
            location = [{
                city: 'New York',
                state: 'NY'
            }];
            localStorage.setItem('location', JSON.stringify(location));
        } else {
            location = JSON.parse(localStorage.getItem('location'));
        }

        return location[0];
    }

    static setLocation(cityInput, stateInput) {
        localStorage.setItem('location', JSON.stringify([{city: cityInput, state: stateInput}]));
    }

}