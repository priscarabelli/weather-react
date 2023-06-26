import React from "react";
import axios from "axios"; 
import { Audio } from 'react-loader-spinner'

export default function Weather(props) {
function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
}

   let apiKey = `6a48a550fc04f170639e60d52b8a6bc5`;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  
       return(<Audio
  height="80"
  width="80"
  radius="9"
  color="pink"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>); 
  
}