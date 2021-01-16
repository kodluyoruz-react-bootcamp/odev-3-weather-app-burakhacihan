import {useContext} from 'react';
import WeatherContext from '../../../contexts/WeatherContext';
import moment from 'moment';
import 'moment/locale/tr';

function Body() {

	const { weather } = useContext(WeatherContext);
	
    return (
		<div className="forecast-table">
			<div className="container">
				<div className="forecast-container">
					{
						weather?.daily.map((item) => (
							<div key={item.dt} className="forecast">
								<div className="forecast-header">
									<div className="day">{moment(item?.dt * 1000).format("dddd")}</div>
								</div>  
								<div className="forecast-content">
									<div className="forecast-icon">
										<img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" width="48" />
									</div>
									<hr />
									{item.weather[0].description}
									<hr />
									<div className="degree">{item.temp.day}<sup>o</sup>C</div>
									<hr />
									<small>En Düşük Sıcaklık <br /> <strong>{item.temp.min}<sup>o</sup></strong></small>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
    )
}

export default Body
