import './assets/style.css';
import { WeatherProvider } from './contexts/WeatherContext';
import Container from './components/Container/Container';

function App() {

  return (
     
    <WeatherProvider>
        <Container></Container>
        {/* https://api.openweathermap.org/data/2.5/onecall?lat=41.0055005&lon=28.7319978&appid=c55bf3105805db60aa15f90eb73002f8 */} 
    </WeatherProvider>
     
  );
}

export default App;
