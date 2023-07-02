import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1 className="city" id="city-input">
        {props.data.city}
      </h1>
      <ul className="day-time-weather">
        <li className="day-time">
          <span id="current-date"><FormattedDate  date={props.data.date}/></span>
        </li>
        <li>
          <span id="description">{props.data.description}</span>
        </li>
      </ul>
      <div className="row">
        <div className="col--sm-6 weather-temp">
          <img
            src= {props.data.weatherMainIcon}
            alt={props.data.description}
            className="weather-icon img-fluid"
            id="big-icon"/>
          <WeatherTemperature celsius={props.data.temperature}/> 
        </div>

        <div className="col--sm-6">
          <ul className="weather-extra-info">
            <li>
              Humidity:<span id="humidity"> {props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {Math.round(props.data.wind)} </span> mph
            </li>
            <li>
              Feels like: <span id="real-feel"> {Math.round(props.data.feelsLike)}</span>°C
            </li>
          </ul>
        </div>
      </div>
        </div>
    ); 
}
