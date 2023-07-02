import React, { useState } from "react";
import "./index";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false); 
  let [forecast, setForecast] = useState(null); 

function handleResponse(response){
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded){
   return (
    
    <div className="Forecast">
      <div className="container weekly-forecast">
        <div className="row">
      <div className="col">
       <ForecastDay data={forecast[0]}/>
       </div>
       
     </div>
     </div>
     </div> ); 
     
} else{ 

  const apiKey = "eab04436t3405o6e84aadcd05339dfb6"; 
  let longitude = props.coordinates.longitude; 
  let latitude = props.coordinates.latitude; 
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`
  axios.get(apiUrl).then(handleResponse); 
  return null; 
}
 
 
}
