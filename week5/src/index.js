//display current temperature of cities
function showTemperature(response) {
  let cityTemperature = document.querySelector("#current-city-temperature");
  let cityElement = document.querySelector("#city");
  let temperature = Math.round(response.data.temperature.current);
  cityTemperature.innerHTML = `${temperature}`;
  cityElement.innerHTML = `${
    response.data.city[0].toUpperCase() +
    response.data.city.substring(1).toLowerCase()
  }`;
}

//search city and display it as h1
function search(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-input");

  let apiKey = "3b7o30109b4aft0712c02563ba2bbf20";
  let urlApi = `https://api.shecodes.io/weather/v1/current?query=${searchCityInput.value}&key=${apiKey}&units=metric`;

  axios.get(urlApi).then(showTemperature);
}

//display current date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#date-and-time");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
