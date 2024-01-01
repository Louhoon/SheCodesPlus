// challenge 1
// import axios from "axios";

// challenge 2
let apiKey = "3b7o30109b4aft0712c02563ba2bbf20";

// challenge 3
let city = "Sydney";
let urlApi = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

// challenge 4
function logTemperature(response) {
  console.log(response.data.temperature.current);
}

axios.get(urlApi).then(logTemperature);
axios.get(urlApi).then(showTemperature);

// challenge 5
function showTemperature(response) {
  let h1 = document.querySelector("h1");
  response = Math.round(response.data.temperature.current);
  h1.innerHTML = `It is ${response} degrees in ${city}`;
}
