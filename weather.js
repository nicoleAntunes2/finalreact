import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function searchWeather() {
    const apiKey = "6782253072f7d90462731a624097fc54";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setWeatherData({
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
      });
    });
  }

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App 🌦️</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter a city..."
          style={{ padding: "10px", width: "200px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
        >
          Search
        </button>
      </form>

      {weatherData && (
        <div style={{ marginTop: "30px" }}>
          <h2>{weatherData.city}</h2>
          <p>{weatherData.temperature}°C</p>
          <p>{weatherData.description}</p>
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            style={{ width: "80px" }}
          />
        </div>
      )}
    </div>
  );
}
