import axios from "axios";
import { useEffect,useState} from "react";
import { useWeather } from "../context/WeatherContext";
import WeatherItem from "./WeatherItem";



const key=process.env.REACT_APP_WEATHER_API_KEY;

function WeatherContainer() {
    const {selectedCity}=useWeather();

    const [weather,setWeather]=useState('');

   const getWeatherData=async(lat,lon)=>{
    
    try {
        const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&lang=tr&appid=${key}`)
        setWeather(data);
        
    } catch (error) {
        alert('veriler yuklenemedi...')
    }
   
   }

   useEffect(()=>{

       getWeatherData(selectedCity.latitude,selectedCity.longitude)

   },[selectedCity])



  return (



    weather && <div className="weather-container">
    {
      weather.daily.map((weatherItem,index)=>{
        return <WeatherItem key={index} weather={weatherItem} />
      })
    }
  </div>
  
       
  )
}

export default WeatherContainer