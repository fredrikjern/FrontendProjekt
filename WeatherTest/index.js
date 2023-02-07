const WEATHER_SRC =
  "https://api.open-meteo.com/v1/metno?latitude=59.33&longitude=18.07&hourly=temperature_2m";
let ul = document.querySelector(".weather-list");
async function getWeatherData(WEATHER_SRC) {
  let data = await fetch(WEATHER_SRC);
  let result = await data.json();
  renderWeatherData(result);
}
function renderWeatherData(result) {
  let hourly = result.hourly;
  let time = hourly.time;
  let temp = hourly.temperature_2m;

  const arr3 = time.reduce((acc, current, index) => {
    return [...acc, [current, temp[index]]];
  }, []);
  console.log(arr3);
  ul.innerHTML = "";
  const html = arr3.map(renderWeather);
  ul.innerHTML = html.join("");
}
function renderWeather(data) {
  return `
    <li>
      <h3>${data[0].toString().replace(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/,"$3/$2/$1")}</h3>
      <h3>${data[1]} °Celsius</h3>

    </li>
  `;
}
getWeatherData(WEATHER_SRC);
