import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { SearchBar, SearchBarProps } from './components/SearchBar'
import { Weather } from './components/Weather'
import Footer from './components/NavBar/Footer/Footer'

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
      {weatherData ? <Weather weatherData={weatherData} /> : ''}
      <Footer />
    </>
  )
}
