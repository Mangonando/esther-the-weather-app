import React from 'react'

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
      <div>
        {weatherData.name}, {weatherData.sys.country}
      </div>
      <div>{weatherData.weather[0].main}</div>
      <div>Temp: {weatherData.main.temp}c</div>
      <div>Feels like: {weatherData.main.feels_like}c</div>
      <div>Temp min: {weatherData.main.temp_min}c</div>
      <div>Temp max: {weatherData.main.temp_max}c</div>
    </>
  )
}
