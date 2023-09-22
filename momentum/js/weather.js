
const API_KEY = "a2c49794d5fdb5f1661b5710443cc147";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url);
}
function onGeoErrer(){
    alert("Can't find you. No weather for you.");
}




navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErrer);