import {useContext} from 'react';
import data from '../../../assets/citylist.json';
import WeatherContext from '../../../contexts/WeatherContext';

function Header() {

    const { city,setCity } = useContext(WeatherContext);
     
    const citySelectHandle = (e) => {
        setCity(e.target.value);
    }

    return (
        <div className="hero" >
            <div className="container">
                <div >
                    <select value={city} onChange={citySelectHandle} >
                        <option>Select Location</option>
                        {
                            data.map((item,index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <hr />
                <h2>{city}</h2>       
            </div>
        </div>
    )
}

export default Header
