document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  console.log("City entered:", city);
  // Additional code to fetch weather data will be added later
});

async function fetchWeatherData(city) {
  const apiKey = "425861bf3edf7d8b256eb4741b3d22d8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("Weather data:", data);
    // Additional code to update DOM with weather information
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}


document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  fetchWeatherData(city);
});

function generateWeatherForecast(city) {
  const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
  const forecast = [];
  const currentDate = new Date();
  for (let i = 0; i < 3; i++) {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are 0-based
    const year = currentDate.getFullYear();
    const temperature = Math.random() * 45 - 10;
    const condition =
      weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const humidity = Math.random() * 100;
    forecast.push({
      date: `${month}/${day}/${year}`,
      temperature,
      condition,
      humidity,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return forecast;
}

