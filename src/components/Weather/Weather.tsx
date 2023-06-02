import React from 'react'
import './Weather.css'
import { motion } from 'framer-motion'

interface ISys {
  country: string
}

interface IWeather {
  main: string
}

interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
}

interface WeatherData {
  name: string
  sys: ISys
  weather: IWeather[]
  main: IMain
}

interface WeatherProps {
  weatherData: WeatherData
}

export const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <>
      <div className="weather-container component-padding">
        <motion.div
          key={weatherData.main.temp}
          className="temperature-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="temperature-number">
            {Math.floor(weatherData.main.temp)}
          </div>
          <div className="temperature-symbol">c</div>
        </motion.div>
        <motion.div
          key={weatherData.name}
          className="location-name"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {weatherData.name}, {weatherData.sys.country}
        </motion.div>
        <motion.div
          key={`${weatherData.weather[0].main}-${weatherData.name}`}
          className="weather-condition"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.75 }}
        >
          {weatherData.weather[0].main}
        </motion.div>
        <div className="additional-temperature-container">
          <div className="additional-temperature-box">
            <motion.div
              key={weatherData.main.feels_like}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              {Math.floor(weatherData.main.feels_like)}c
            </motion.div>
            <motion.div
              key={`Feels like-${weatherData.main.feels_like}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
            >
              Feels like
            </motion.div>
          </div>
          <div className="additional-temperature-box">
            <motion.div
              key={weatherData.main.temp_min}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              {Math.floor(weatherData.main.temp_min)}c
            </motion.div>
            <motion.div
              key={`Temp min-${weatherData.main.temp_min}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
            >
              Temp min
            </motion.div>
          </div>
          <div className="additional-temperature-box">
            <motion.div
              key={weatherData.main.temp_max}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              {Math.floor(weatherData.main.temp_max)}c
            </motion.div>
            <motion.div
              key={`Temp max-${weatherData.main.temp_max}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
            >
              Temp max
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
