import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'

const Weather = () => {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  // const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8f471369af86e6cda49e083a11552a63`
    
  const searchLocation = (e) => {
    if (e.key === "Enter") {   
      axios.get(api).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }


  return (
    <section>
      <div className="search">
        <input type="search" 
                value={location} 
                onChange={e =>setLocation(e.target.value)}
                onKeyDown={searchLocation}
                placeholder='Enter Location' />
      </div>
      <div className="container">
        {
          data.name != undefined && <div className="top">
            <div className="location">
              <p>{data.name}</p>
              {data.sys ? <p>{data.sys.country}</p> : null}
            </div>
            <div className="temp">
              {
                data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null
              }
            </div>
            <div className="description">
              {
                data.weather ? <p>{data.weather[0].main}</p> : null
              }
            </div>
          </div>
        }
        
        {
          data.name != undefined && <div className="bottom">
            <div className="precipitation">
              <p>Feels Like</p>
              {
                data.main ? <p className='details'>{data.main.feels_like.toFixed()}°F</p> : null
              }  
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {
                data.main ? <p className='details'>{data.main.humidity}%</p> : null
              } 
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {
                data.wind ? <p className='details'>{data.wind.speed.toFixed()} MPH</p> : null
              } 
            </div>
        </div>
        }

      </div>
    </section>
  )
}

export default Weather