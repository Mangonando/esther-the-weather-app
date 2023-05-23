import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const [weatherData, setWeatherDate] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        //something
      } catch {
        //something else
      }
    }
    getWeatherData()
  })

  return <div className="i-box">🌬 💨 💨 Esther</div>
}
