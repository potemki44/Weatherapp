import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

import background from "../src/assest/img/background.jpg"

import { PantallaCarga } from './Componentes/PantallaCarga'
import { Card } from './Componentes/Card'


function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [temperture, setTemperture] = useState()
  const [isCelcius, setIsCelcius] = useState(true)
  const [loading, setLoading] = useState(true)



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
          setLoading(false)
          const celcius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          setTemperture({ celcius, farenheit })
        })
        .catch(err => console.log(err))


    }
  }, [latLon])

  return (
    <div className="App" >



      {loading ? <PantallaCarga /> : <Card weather={weather} setIsCelcius={setIsCelcius} isCelcius={isCelcius} background={background} temperture={temperture} />}

    </div>
  )

}
export default App
