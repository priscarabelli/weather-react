import React, { useState } from "react";
import "./WeatherTemperature.css"


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius"); 
    function showFarenheit(event){
        event.preventDefault();
        setUnit("farenheit")
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function farenheit(){
        return(props.celsius *9) /5 + 32;
    }

    if (unit === "celsius"){
    return( <span>
         <span className="temperature-big" id="temperature-link">
            {Math.round(props.celsius)}
          </span>
          <span className="units">°C <span className="bar-units">|</span> 
          <a href="/" onClick={showFarenheit} className="farenheit-link"> °F</a>
          </span> 
        </span>  
    ) } else {
        return( <span>
         <span className="temperature-big" id="temperature-link">
            {Math.round(farenheit())}
          </span>
          <span className="units"><a href="/" onClick={showCelsius}>°C</a>| 
         °F
          </span>
           </span>); 
    }
}