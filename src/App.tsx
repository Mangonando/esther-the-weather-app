import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const [weatherData, setWeatherData] = useState<null | any>(null)
  const [city, setCity] = useState<string>('Medellin')

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_ESTHER_WEATHER_API_KEY}`,
        )
        setWeatherData(response.data)
        console.log('API fetch', response.data)
      } catch (error) {
        console.error("Error while fetching Open Weather's API", error)
      }
    }
    getWeatherData()
  }, [])

  return (
    <>
      <div className="i-box">🌬 💨 💨 Esther</div>
      <input type="text" className="i-box" />
      {weatherData ? (
        <div>
          <div>
            {weatherData.name}, {weatherData.sys.country}
          </div>
          <div>{weatherData.weather[0].main}</div>
          <div>{weatherData.main.temp}</div>
          <div>{weatherData.main.feels_like}</div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
