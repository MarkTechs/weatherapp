import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
//import WeatherTemparature from './WeatherTemperature';
const WeatherData = () => (
<div>
<h2>Weather Data</h2>
<WeatherExtraInfo humidity={80} wind={"20km"}/>

</div>

);

export default WeatherData;