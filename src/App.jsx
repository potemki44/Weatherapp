import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import solecito from "../src/assest/img/sun.png"
import background from "../src/assest/img/background.jpg"
import Button from './Componentes/Button'
function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [temperture, setTemperture] = useState()
  const [isCelcius, setIsCelcius] = useState(true)



  useEffect(() => {
    const succes = pos => {

      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({ lat, lon })
    }
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if (latLon !== undefined) {
      const API_KEY = `53ce4b6c938055cf49d1d9a9682a2fdc`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`


      axios.get(URL)

        .then(res => {
          setWeather(res.data)
          const celcius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          setTemperture({celcius, farenheit})
        })
        .catch(err => console.leg(err))


    }
  }, [latLon])

  return (
    <div className="App" >
     
      <img className='background' src={background}></img>

      <section>
  
        <h1 > {weather?.name},{weather?.sys.country}</h1>

        <h4>Temperature: {isCelcius ? 
                            temperture?.celcius + ' ºC' 
                          : 
                            temperture?.farenheit + ' ºF'}
        </h4>
      

        <ul>


          <li className='li1'>  Nubosity  <h5>{weather?.clouds.all}%</h5></li>
          <li className='li1'>Wind gust<h5 className='h5dos'>{weather?.wind.speed}</h5></li>
          <li className= 'li1'>Humidity <h5  className='h5tres'> {weather?.main.humidity}</h5>  </li>
          

        </ul>
        <Button setIsCelcius={setIsCelcius} isCelcius={isCelcius} />
      </section>


      <img src={solecito}></img>



    </div>
  )

}
export default App
