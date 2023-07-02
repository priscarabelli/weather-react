import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Header.css";

export default function Header(props){
  
  const [weatherData, setWeatherData] = useState({ready: false}); 

function handleResponse(response){
setWeatherData({
  ready: true, 
  city: response.data.city, 
  temperature: response.data.temperature.current,
  description: response.data.condition.description,
  wind: response.data.wind.speed,
  humidity: response.data.temperature.humidity, 
  feelsLike: response.data.temperature.feels_like,
  date: new Date(response.data.time * 1000),  
  weatherMainIcon: response.data.condition.icon_url,
})
 
}
  
  if (weatherData.ready)
  { return (
    <div className="Header">
      <h1 className="city" id="city-input">
        {" "}
        {weatherData.city}{" "}
      </h1>
      <ul className="day-time-weather">
        <li className="day-time">
          <span id="current-date"><FormattedDate  date={weatherData.date}/></span>
        </li>
        <li>
          <span id="description">{weatherData.description}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col--sm-6 weather-temp">
          <img
            src= {weatherData.weatherMainIcon}
            alt={weatherData.description}
            className="weather-icon img-fluid"
            id="big-icon"/>

          <span className="temperature-big" id="temperature-link">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="units">°C</span>
        </div>

        <div className="col--sm-6">
          <ul className="weather-extra-info">
            <li>
              Humidity:<span id="humidity"> {weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {Math.round(weatherData.wind)} </span> mph
            </li>
            <li>
              Feels like: <span id="real-feel"> {Math.round(weatherData.feelsLike)}</span>°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );} 
  else {
  const apiKey = "eab04436t3405o6e84aadcd05339dfb6"; 
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  
    return("Loading Weather App..."); 
  }
  }
