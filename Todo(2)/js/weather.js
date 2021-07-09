const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6ae267c7f4265aea7c456d0a1f9241cd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `오늘의 날씨는: ${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// $(document).ready(function(){
//   let weatherlcon = {
//     '01' : 'fas fa-sun',
//     '02' : 'fas fa-cloud-sun', 
//     '03' : 'fas fa-cloud', 
//     '04' : 'fas fa-cloud-meatball', 
//     '09' : 'fas fa-cloud-sun-rain', 
//     '10' : 'fas fa-cloud-showers-heavy', 
//     '11' : 'fas fa-poo-storm', 
//     '13' : 'far fa-snowflake', 
//     '50' : 'fas fa-smog'
//   };

//   $.ajax({
//     url: 'url',
//     dataType: 'json',
//     type: 'GET',
//     success:function(data){
//       var $Icon = (data.weather[0].icon).substr(0,2);
//       var $Temp = Math.floor(data.main.temp) + 'º'; 
//       var $city = data.name;

      

//     }
//   })
// });