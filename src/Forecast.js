import React, { useState, useEffect } from "react";
import "./index";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false); 
  let [forecast, setForecast] = useState(null); 

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

function handleResponse(response){
  setForecast(response.data.daily);
  setLoaded(true);
}
function load(){
const apiKey = "eab04436t3405o6e84aadcd05339dfb6"; 
  let longitude = props.coordinates.longitude; 
  let latitude = props.coordinates.latitude; 
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`
  axios.get(apiUrl).then(handleResponse); 
}

if (loaded){
   return (
    
    <div className="Forecast">
      <div className="container weekly-forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 6){
              return (
                  <div className="col" key={index}>
       <ForecastDay data={dailyForecast}/>
       </div>
              )
            } else {
              return null; 
            }
          })}
      
       
     </div>
     </div>
     </div> ); 
     
} else{ 
 load()
 
  return null; 
}
 
 
}
