import React from "react";
import "./Forecast.css"

export default function ForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temperature.maximum)
        return `${temperature}°`; 
    }
    function minTemp(){
        let temperature = Math.round(props.data.temperature.minimum)
        return `${temperature}°`;
    }
    function day(){
        let date = new Date(props.data.time * 1000); 
        let day = date.getDay(); 

        let days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        return days[day]; 
    }

return(
<div className="ForecastDay">
<div className="col-sm-2 forecast-days">{day()}</div>
        <div className="row">
          <div className="col-sm-2 forecast-icon">
             <img
            src= {props.data.condition.icon_url}
            alt={props.data.condition.description}
           />       
        </div>
        <div className="row forecast-temp">
          <span className="col-sm-2"> {maxTemp()}|<span className="min-temp"> {minTemp()} </span>
          </span>
          
</div>
</div>
</div>
); 

}