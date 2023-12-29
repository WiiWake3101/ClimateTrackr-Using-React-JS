import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "./api"; // Import the fetchWeatherData function

const Card = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "0a6ac1e93dcc40cf924790aa50304d08"; // Replace with your API key

    const fetchWeather = async () => {
      try {
        const data = await fetchWeatherData(city, apiKey);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Fetch weather data when the component mounts or 'city' state changes
    fetchWeather();
  }, [city]); // Run useEffect whenever 'city' changes

  return (
    <div className="card">
      <div className="search">
        {/* Input for entering city */}
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button aria-label="Search">
          <img src="assets/images/search.png" alt="Search icon" />
        </button>
      </div>
      <div className="weather">
        {/* Display weather data */}
        <img
          src="icons//rain.png"
          className="weather-icon"
          alt="Weather icon"
        />
        <h1 className="temp">
          {weatherData?.main?.temp
            ? `${Math.round(weatherData?.main?.temp)} °C`
            : "-- °C"}
        </h1>
        <br />
        <h2 className="city">{weatherData?.name || "--"}</h2>
        <br />
        <div className="details">
          <div className="col">
            <img src="icons//humidity.png" alt="Humidity icon" />
            <div>
              <p className="humidity">
                {weatherData?.main?.humidity
                  ? `${weatherData.main.humidity} %`
                  : "-- %"}
              </p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="icons//wind.png" alt="Wind icon" />
            <div>
              <b>
                <p className="Wind">
                  {weatherData?.wind?.speed
                    ? `${weatherData.wind.speed} km/hr`
                    : "-- km/hr"}
                </p>
              </b>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
