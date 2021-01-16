import {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import data from '../assets/citylist.json';

const WeatherContext = createContext(null);

export const WeatherProvider = ({children}) => {
    const defaultCity = localStorage.getItem("City");
    const [city,setCity] = useState(defaultCity || "Adana");
    const [latlon,setLatLon] = useState({
        latitude: "36.9975315",
        longitude: "35.2180272"
    });

    const [weather,setWeather] = useState(null);

    const values = {
        city,
        setCity,
        weather,
        setWeather
    }

    useEffect(() =>{
        localStorage.setItem("City",city);
        data.forEach((item) => {
            item.name === city &&
            setLatLon({ latitude: item.latitude, longitude: item.longitude });
        });
    },[city]);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlon.latitude}&lon=${latlon.longitude}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OpenWeatherAPI_KEY}&units=metric&lang=tr`).then((res) => {
            setWeather(res.data);
        });
    },[latlon])

    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );

}

export default WeatherContext
