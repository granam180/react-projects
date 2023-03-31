import React, { useState } from "react";
import "./weatherForecast.css";

const TOKEN = process.env.REACT_APP_API_KEY;

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${TOKEN}`
    );
    if (!response.ok) {
      setWeatherData(null);
      return;
    }
    const data = await response.json();
    setWeatherData(data);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const forecast = weatherData
    ? weatherData.list
        .filter((item, index) => index % 8 === 0) // setting props for 'item' & 'index' to reference below
        .slice(0, 5)
        .map((item) => {
          const date = new Date(item.dt * 1000);
          const day = days[date.getDay()];
          const temperature = Math.round(
            ((item.main.temp - 273.15) * 9) / 5 + 32
          );
          const feels_like = Math.round(
            ((item.main.feels_like - 273.15) * 9) / 5 + 32
          );
          const wind = item.wind.speed;  
          const description = item.weather[0].description;
          return { date, day, temperature, feels_like, wind, description };
        })
    : [];

    console.log(weatherData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-container"
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
        <button className="search-button " type="submit">
          Search
        </button>
      </form>
      {weatherData === null ? (
        <p>No data available</p>
      ) : weatherData ? (
        weatherData.cod === "200" ? (
          <>
          <br />
            {"Here is the next five days weather details for: "}
            <b>{weatherData.city.name}</b>
            <div className="card-container">
              {forecast.map((item) => (
                <div className="card" key={item.date}>
                  <h3>
                    <u>{item.day}</u>
                  </h3>
                  <p>{item.date.toLocaleDateString()}</p>

                  <p>Temperature: {item.temperature}°F</p>
                  <p>Feels Like: {item.feels_like}°F</p>
                  <p>Wind: {item.wind} m/s</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default WeatherForecast;
