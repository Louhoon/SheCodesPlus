function showSearchCity(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-input");
  let h1 = document.querySelector("#city");

  h1.innerHTML = `${
    searchCityInput.value[0].toUpperCase() +
    searchCityInput.value.substring(1).toLowerCase()
  }`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showSearchCity);

let date = new Date();

function showCurrentDateAndTime() {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = weekDays[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let dateAndTime = document.querySelector("#date-and-time");
  dateAndTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
}
showCurrentDateAndTime();
