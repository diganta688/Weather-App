import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "./Weather.css"
import { useState } from 'react';

export default function Weather ({updateWeather}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
    const weatherKEY = "35819fbe675907e53fc21529e5a95fbe";

    const cityLocationFinder = async()=>{
        try{
            let location = await fetch(`${weatherAPI}?q=${city}&appid=${weatherKEY}&units=metric`);
            let jsonLocation = await location.json();
            let output = {
                city: jsonLocation.name,
                temp: jsonLocation.main.temp,
                temp_max: jsonLocation.main.temp_max,
                temp_min: jsonLocation.main.temp_min,
                feels_like: jsonLocation.main.feels_like,
                humidity: jsonLocation.main.humidity,
                description: jsonLocation.weather[0].description,
            }
            return output;
            
        } catch(err){
            throw err;
        }
    }

    const handelChange = (event)=>{ 
        setCity(event.target.value);
        setError(false);
    }
    const handelSubmit = async(event)=>{ 
        try{
            event.preventDefault();
            setCity("");
            let outputResult = await cityLocationFinder();
            updateWeather(outputResult);
            setError(false);
        } catch(err){
            setError(true);
        }

    }

    return (
        <>
            <div className="main">
                <div className="">
                    <h1>Weather App</h1>
                </div>
                <div className="">
                    <form action="" onSubmit={handelSubmit}>
                    <TextField value={city} label="Enter City" id="standard-size-small" size="small" variant="standard" onChange={handelChange}/><br /><br />
                    <Button variant="contained" endIcon={<SendIcon />} type='submit'>Send</Button>
                    </form>
                </div>
                        {
                            error &&  
                            <Alert severity="error" onClose={() => {setError(false)}}>
                                <AlertTitle>Warning</AlertTitle>
                                There is no place that you searched for
                            </Alert>
                        }
            </div>
        </>
    )
}