const apiKey = "53310484652949c5b3b181431250904"; 
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherBox = document.getElementById("weatherInfo");

  if (!city) {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const {
      location: { name, region, country },
      current: { temp_c, condition, humidity, wind_kph }
    } = data;

    weatherBox.innerHTML = `
      <h2>${name}, ${region}, ${country}</h2>
      <p>🌡 Temperature: ${temp_c} °C</p>
      <p>☁ Condition: ${condition.text}</p>
      <img src="https:${condition.icon}" alt="Weather icon" />
      <p>💧 Humidity: ${humidity}%</p>
      <p>💨 Wind Speed: ${wind_kph} kph</p>
    `;
  } catch (error) {
    weatherBox.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
