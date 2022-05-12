// Init Weather
const weather = new Weather(Store.getLocation().city, Store.getLocation().state);
//Init UI
const ui = new UI;

// Event Listener on Page Load
getWeather();
// document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById("w-change-btn").addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location of Weather object
    weather.changeLocation(city, state);

    weather.getGeocode().then(geodata => {
        if(geodata) {
            // Overwrite location in localStorage
            Store.setLocation(city,state);
            // Reload page with updated data
            getWeather();
            // Close modal
            $('#locModal').modal('hide');
        } else {
            ui.showAlert('Location not found. Please correct your inputs and resubmit.', 'alert alert-danger');
            // Revert weather location back with Local Storage
            weather.changeLocation(Store.getLocation().city, Store.getLocation().state);
        }
    })
})




// Encompassing function get gets geocode, inserts as parameter to get data, then dynamically loads the page with response
function getWeather() {
    weather.getGeocode()
        .then(geodata => {
            if(geodata) {
                weather.getWeather(geodata)
                    .then(data => {
                        ui.loadPage(data, weather.city, weather.state);
                    })
            }
        })
        .catch(err => console.log(err));
}