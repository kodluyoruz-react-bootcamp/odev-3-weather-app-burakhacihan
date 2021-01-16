import './assets/style.css';
import { WeatherProvider } from './contexts/WeatherContext';
import Container from './components/Container/Container';

function App() {

  return (
     
    <WeatherProvider>
        <Container></Container>
    </WeatherProvider>
     
  );
}

export default App;
