const city = document.getElementById('city');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const image = document.getElementById('image');

document.getElementById('city-input').addEventListener('submit', e =>{
  e.preventDefault();
  getUpdates(city.value);
  city.value = "";
});


getUpdates = (city) => {
  const xhr = new XMLHttpRequest();
  const apikey = '54840b7663a4a83ca6b7c08280fb8b99'
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name + '<sup class="badge badge-warning" id="country">' + data.sys.country + '</sup>';
      temp.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup`;
      description.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

const xhr = new XMLHttpRequest();
const apikey = '54840b7663a4a83ca6b7c08280fb8b99'
xhr.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?q=agadir&appid=${apikey}`);
xhr.send();
xhr.onload = () => {
  if (xhr.status === 404) {
    alert("Place not found");
  } else {
    var data = JSON.parse(xhr.response);
    cityName.innerHTML = data.name + '<sup class="badge badge-warning" id="country">' + data.sys.country + '</sup>';
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup`;
    description.innerHTML = data.weather[0].description;
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  }
};