import { useState } from "react"
import Weather from "./Weather"
import DisplayWeather from "./displayWeather"

export default function MainWeather(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 10.05,
        temp_max: 10.05,
        temp_min: 10.05,
        feels_like: 9.38,
        humidity: 87,
        description: "fog"
    });
    const updateWeather = (result)=>{
        setWeatherInfo(result)
    }

    return (
        <div className="">
            <Weather updateWeather = {updateWeather}/>            
            <DisplayWeather weather = {weatherInfo}/>
        </div>
    )
}