import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const WeatherContext = createContext(null);

const defaultCity = localStorage.getItem("City");

export const WeatherProvider = ({children}) => {

    const [city,setCity] = useState(defaultCity);

    const [cities,setCities] = useState([]);

    const [weather,setWeather] = useState([]);

    const values = {
        city,
        setCity,
        cities,
        setCities,
        weather,
        setWeather
    }

    useEffect(() =>{
        localStorage.setItem("City",city);
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${city}&mode=json&units=metric&appid=${process.env.REACT_APP_OpenWeatherAPI_KEY}`).then((res) => {
			setWeather(res.data);
        });
    },[city])

    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );

}

export default WeatherContext
