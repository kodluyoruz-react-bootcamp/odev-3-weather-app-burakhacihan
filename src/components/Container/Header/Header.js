import {useEffect,useContext} from 'react';
import data from '../../../assets/citylist.json';
import WeatherContext from '../../../contexts/WeatherContext';

function Header() {

    const { city,setCity, cities,setCities } = useContext(WeatherContext);
     

    const citySelectHandle = (e) => {
        setCity(e.target.value);
    }

    useEffect(() => {
        setCities(data.data);
    },[city]);

    return (
        <div className="hero" >
            <div className="container">
                <div className="find-location">
                    <select value={city} onChange={citySelectHandle} className="location-select">
                        <option>Select Location</option>
                        {
                            cities.map((item,index) => (
                                <option key={index} value={item.cityID}>{item.name}</option>
                            ))
                        }
                    </select>
                    OR
                    <button><i className="iconMarkerPin"></i> Find My Location</button>
                </div>

            </div>
        </div>
    )
}

export default Header
