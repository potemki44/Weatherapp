import React from 'react'
import Button from './Button'
import solecito from "../assest/img/sun.png"

export const Card = ({ weather, setIsCelcius, isCelcius, background, temperture }) => {
    return (
        <div className='newApp'>
            <img className='background' src={background}></img>
            <img src={solecito}></img>
            <section>

                <h1 > {weather?.name},{weather?.sys.country}</h1>

                <h4>Temperature: {isCelcius ?
                    temperture?.celcius + ' ºC'
                    :
                    temperture?.farenheit + ' ºF'}
                </h4>


                <ul>


                    <li className='li1'>  <strong>Nubosity</strong>  <h5>{weather?.clouds.all}%</h5></li>
                    <li className='li1'><strong>Wind gust</strong><h5 className='h5dos'>{weather?.wind.speed}</h5></li>
                    <li className='li1'><strong>Humidity</strong> <h5 className='h5tres'> {weather?.main.humidity}</h5>  </li>


                </ul>
                <Button setIsCelcius={setIsCelcius} isCelcius={isCelcius} ></Button>
            </section>


        </div>
    )
}
