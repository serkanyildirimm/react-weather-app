import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';


function App() {
  return (

    <WeatherProvider>
      <div className='container'>
        <Header />
        <WeatherContainer />
      </div>
    </WeatherProvider>
  );
}

export default App;
