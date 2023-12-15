let weather = {
  paris: {
    temp: 19.7,
    tempF: 66.2,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    tempF: 62.6,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    tempF: 86,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    tempF: 68,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    tempF: 23,
    humidity: 20,
  },
};

let city = prompt("Enter a city");

if (city.toLowerCase() in weather) {
  let cityData = weather[city.toLowerCase()];
  alert(
    `It is currently ${cityData.temp}°C (${
      cityData.tempF
    }°F) in ${city.toLowerCase()} with a humidity of ${cityData.humidity}%`
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
