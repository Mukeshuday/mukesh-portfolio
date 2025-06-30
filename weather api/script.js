const apiKey = 'cf113af389bb470682295104253006'; // WeatherAPI.com key

const searchBox = document.getElementById('searchbox');
const searchBtn = document.getElementById('searchbtn');

const cityName = document.getElementById('city');
const dateEl = document.getElementById('date');
const descriptionEl = document.querySelector('.description');
const tempEl = document.getElementById('temp');
const tempMaxEl = document.getElementById('tempMax');
const tempMinEl = document.getElementById('tempMin');
const windEl = document.getElementById('wind');
const humidityEl = document.getElementById('humidity');
const feelsLikeEl = document.getElementById('feelslike');

function getToday() {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return today.toLocaleDateString('en-IN', options);
}

function fadeInElements() {
  document.getElementById('info')?.classList.add('visible');
  document.querySelector('.description')?.classList.add('visible');
  document.getElementById('temp')?.classList.add('visible');
  document.getElementById('extraInfo')?.classList.add('visible');
}

function fetchWeather(city) {
  document.getElementById('info')?.classList.remove('visible');
  document.querySelector('.description')?.classList.remove('visible');
  document.getElementById('temp')?.classList.remove('visible');
  document.getElementById('extraInfo')?.classList.remove('visible');

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert("City not found or API error.");
        return;
      }

      const current = data.current;
      const location = data.location;

      cityName.textContent = location.name;
      dateEl.textContent = getToday();

      descriptionEl.innerHTML = `
        <h3>${current.condition.text}</h3>
        <img src="https:${current.condition.icon}" alt="weather icon" />
      `;

      tempEl.innerHTML = `<h2>${current.temp_c}°C</h2>`;
      tempMaxEl.textContent = (current.temp_c + 2).toFixed(1) + "°";
      tempMinEl.textContent = (current.temp_c - 2).toFixed(1) + "°";
      windEl.textContent = `${current.wind_kph} km/h`;
      humidityEl.textContent = `${current.humidity} %`;
      feelsLikeEl.textContent = `${current.feelslike_c} °C`;

      setTimeout(fadeInElements, 100);
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
    });
}

searchBtn.addEventListener('click', () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    fetchWeather(city);
  }
});

window.addEventListener('load', () => {
  fetchWeather("Chittoor");
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});