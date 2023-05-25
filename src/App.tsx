import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import { SearchBar, SearchBarProps } from './components/SearchBar'
import Footer from './components/Footer'

export default function App() {
  const [weatherData, setWeatherData] = useState<null | any>(null)
  const [city, setCity] = useState<string>('Medellin')

  const handleCityUpdate: SearchBarProps['newCity'] = (
    newCity: React.SetStateAction<string>,
  ) => {
    setCity(newCity)
  }

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_ESTHER_WEATHER_API_KEY}`,
        )
        setWeatherData(response.data)
        console.log('API fetch', response.data)
      } catch (error) {
        console.error("Error while fetching Open Weather's API", error)
      }
    }
    getWeatherData()
  }, [city])

  return (
    <>
      <NavBar />
      <SearchBar newCity={handleCityUpdate} />
      {weatherData ? (
        <div>
          <div>
            {weatherData.name}, {weatherData.sys.country}
          </div>
          <div>{weatherData.weather[0].main}</div>
          <div>Temp: {weatherData.main.temp}c</div>
          <div>Feels like: {weatherData.main.feels_like}c</div>
          <div>Temp min: {weatherData.main.temp_min}c</div>
          <div>Temp max: {weatherData.main.temp_max}c</div>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </>
  )
}
