import React from 'react'
import './Weather.css'
import { motion } from 'framer-motion'

interface Sys {
  country: string
}

interface Weather {
  main: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
}

interface WeatherData {
  name: string
  sys: Sys
  weather: Weather[]
  main: Main
}

interface WeatherProps {
  weatherData: WeatherData
}

export const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <>
      <div className="weather-container component-padding">
        <motion.div
          className="temperature-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.5 }}
        >
          <motion.div className="temperature-number">
            {Math.floor(weatherData.main.temp)}
          </motion.div>
          <motion.div className="temperature-symbol">c</motion.div>
        </motion.div>
        <div className="location-name">
          {weatherData.name}, {weatherData.sys.country}
        </div>
        <div className="weather-condition">{weatherData.weather[0].main}</div>
        <div className="additional-temperature-container">
          <div className="additional-temperature-box">
            <div>{Math.floor(weatherData.main.feels_like)}c</div>
            <div>Feels like</div>
          </div>
          <div className="additional-temperature-box">
            <div>{Math.floor(weatherData.main.temp_min)}c</div>
            <div>Temp min</div>
          </div>
          <div className="additional-temperature-box">
            <div>{Math.floor(weatherData.main.temp_max)}c</div>
            <div>Temp max</div>
          </div>
        </div>
      </div>
    </>
  )
}
