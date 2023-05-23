import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const [weatherData, setWeatherDate] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
        )
      } catch (error) {
        console.error("Error while fetching Open Weather's API")
      }
    }
    getWeatherData()
  })

  return <div className="i-box">🌬 💨 💨 Esther</div>
}
