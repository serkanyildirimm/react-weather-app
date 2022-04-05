import { useWeather } from '../context/WeatherContext';
import cities from '../data/cities.json'    

function Header() {
    const {selectedCity,setSelectedCity}=useWeather();

    const handleChange=(e)=>{
        setSelectedCity(cities.filter((city)=>{
            return city.name===e.target.value
        })[0])
    }


  return (
   <header>
       <select className='select' onChange={handleChange} name='cities' id='cities' defaultValue={selectedCity}>
            {
                cities.map((city)=>{
                    return <option key={city.id} value={city.name} >{city.name}</option>
                })
            }
       </select>
       <h1 className='tittle'>Weather Forecast</h1>
       <h4 className='date'>{new Date().toLocaleDateString("tr")}</h4>
   </header>
  )
}

export default Header