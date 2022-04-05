import { createContext,useEffect,useState,useContext} from "react";


const WeatherContext=createContext();

export const WeatherProvider=({children})=>{

    const [selectedCity,setSelectedCity]=useState(JSON.parse(localStorage.getItem("selectedCity")) ||{

        "id":34,
        "name":'istanbul',
        "latitude": "41.0053",
        "longitude": "28.9770",
        "population": 14657434,
        "region": "Marmara"
    });

    useEffect(()=>{
        localStorage.setItem("selectedCity",JSON.stringify(selectedCity))
    },[selectedCity])

    const values={
        selectedCity,
        setSelectedCity
    }

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>

}

export const useWeather=()=>useContext(WeatherContext)