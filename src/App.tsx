import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=process.env.ESTHER_WEATHER_API_KEY',
        )
        setWeatherData(response.data)
      } catch (error) {
        console.error("Error while fetching Open Weather's API")
      }
    }
    getWeatherData()
  })

  return (
    <>
      <div className="i-box">🌬 💨 💨 Esther</div>
      {weatherData ? <div className="i-box">{weatherData}</div> : ''}
    </>
  )
}
