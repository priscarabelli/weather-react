import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Header.css";

export default function Header(props){
  const [city, setCity] = useState(props.defaultCity);
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

function search() {
 const apiKey = "eab04436t3405o6e84aadcd05339dfb6"; 
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleCityChange(event){
setCity(event.target.value);
}
  
  if (weatherData.ready)
  { return (
     <div className="Header">
      <form  onSubmit={handleSubmit} id="input-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="search-bar"
            autocomplete="on"
            placeholder="Enter city here" 
            onChange={handleCityChange}/>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="search-button"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className=" btn btn-outline-secondary"
              id="current-button"
              type="button"
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
    </div>
  );} 
  else {
 search(); 
    return"Loading Weather App..."; 
  }
  }

