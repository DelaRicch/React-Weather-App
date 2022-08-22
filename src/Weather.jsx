import React from 'react'
import axios from 'axios'
import './Weather.css'

const Weather = () => {

    const api = 'https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=8f471369af86e6cda49e083a11552a63'
    
  return (
    <section>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Accra</p>
          </div>
          <div className="temp">
            <h1>30°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="precipitation">
            <p>Precipitation</p>
            <p className='details'>45°F</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p className='details'>20%</p>
          </div>
          <div className="wind">
            <p>Wind</p>
            <p className='details'>12 MPH</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather