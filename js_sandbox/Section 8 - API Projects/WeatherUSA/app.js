// Init Weather
const weather = new Weather('New York', 'NY');
weather.getWeather().then(data => console.log(data));
//Init UI
const ui = new UI;