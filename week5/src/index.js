// challenge 1

// challenge 2
let apiKey = "7746bdeabca928cfedcad71e52fd9d66";

// challenge 3
let city = "Sydney";
let urlApi = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
// challenge 4
function showTemperature(response) {
  console.log(response);
}

axios.get(urlApi).then(showTemperature);
