const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", async function (event) {
  if (event) event.preventDefault();

  const city = cityInput.value.trim();
  if (!city) {
    console.warn("Please enter a city name.");
    return;
  }

  try {
    const weather = await fetchWeatherData(city);
    console.log("Weather (parsed):", weather);

    if (weather && weather.coord) {
      const forecast = generateWeatherForecast(
        city,
        weather.coord.lat,
        weather.coord.lon
      );
      console.log("Generated forecast:", forecast);
      // You can update the DOM here if you want
    }
  } catch (err) {
    console.error("Search failed:", err);
  }
});

async function fetchWeatherData(latitude, longitude) {
  // const apiKey = "425861bf3edf7d8b256eb4741b3d22d8";
  // const safeCity = encodeURIComponent(city);
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${safeCity}&appid=${apiKey}`;

  // try {
  //   const response = await fetch(apiUrl);

  //   if (!response.ok) {
  //     let errBody = {};
  //     try {
  //       errBody = await response.json();
  //     } catch (e) {
  //       // ignore
  //     }
  //     throw new Error(
  //       `OpenWeatherMap error: ${response.status} ${response.statusText} — ${
  //         errBody.message || "no message"
  //       }`
  //     );
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching weather data:", error);
  //   throw error;
  // }

  const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
  const forecast = [];
  const currentDate = new Date();
  for (let i = 0; i < 3; i++) {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
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
      latitude,
      longitude,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return forecast;
}

function getUserLocation() {
  return {
    latitude: 40.7128,
    longitude: -74.006,
  };
}

const location1 = getUserLocation();


// ⬇️ moved this OUTSIDE of fetchWeatherData so it's usable
function generateWeatherForecast(city, latitude, longitude) {
  const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
  const forecast = [];
  const currentDate = new Date();
  for (let i = 0; i < 3; i++) {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
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
      latitude,
      longitude,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return forecast;
}

const forecastData = generateWeatherForecast(
  "New York",
  location1.latitude,
  location1.longitude
);

function getWeatherIcon(condition) {
  switch (condition) {
    case "Sunny":
      return "☀️";
    case "Cloudy":
      return "☁️";
    case "Rainy":
      return "🌧️";
    case "Snowy":
      return "❄️";
    default:
      return "❓";
  }
}
forecastData.forEach((dayForecast) => {
  const weatherIcon = getWeatherIcon(dayForecast.condition);
  console.log(`Date: ${dayForecast.date}`);
  console.log(`Condition: ${dayForecast.condition} ${weatherIcon}`);
  console.log(`Temperature: ${dayForecast.temperature.toFixed(1)}°C`);
  console.log(`Humidity: ${dayForecast.humidity.toFixed(1)}%`);
  console.log(`Location: (${dayForecast.latitude}, ${dayForecast.longitude})`);
});




