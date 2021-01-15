import {useEffect,useContext} from 'react';
import WeatherContext from '../../../contexts/WeatherContext';

import Clear_Sky from "../../../assets/images/icons/icon-1.svg";
import Sun from "../../../assets/images/icons/icon-2.svg";
import Broken_Cloud from "../../../assets/images/icons/icon-6.svg";
import Rain from "../../../assets/images/icons/icon-10.svg";
import Cloudly from "../../../assets/images/icons/icon-5.svg";
import Snow from "../../../assets/images/icons/icon-14.svg";
import Mist from "../../../assets/images/icons/icon-8.svg";

import Umbrella from "../../../assets/images/icon-umberella.png";
import Wind from "../../../assets/images/icon-wind.png";


function Body() {

	const { city, weather } = useContext(WeatherContext);
	
    return (
		<>
			<div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">İstanbul</div>
								<div className="date">6 Oct</div>
							</div>  
							<div className="forecast-content">
								<div className="location"></div>
								<div className="degree">
									<div className="num">23<sup>o</sup>C</div>
									<div className="forecast-icon">
										<img src={Sun} alt="" width="90" />
									</div>	
								</div>
								<span><img src={Umbrella} alt="" />20%</span>
								<span><img src={Wind} alt="" />18km / h</span>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Tuesday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Broken_Cloud} alt="" width="48" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Wednesday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Rain} alt="" width="30" />
									<img src={Snow} alt="" width="30" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Thursday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Cloudly} alt="" width="48" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Friday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Clear_Sky} alt="" width="48" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Saturday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Snow} alt="" width="48" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div className="forecast">
							<div className="forecast-header">
								<div className="day">Sunday</div>
							</div>  
							<div className="forecast-content">
								<div className="forecast-icon">
									<img src={Mist} alt="" width="48" />
								</div>
								<div className="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

export default Body
