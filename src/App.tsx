import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { SearchBar, ISearchBarProps } from './components/SearchBar/SearchBar'
import { Weather } from './components/Weather/Weather'
import Footer from './components/Footer/Footer'

export default function App() {
  const [weatherData, setWeatherData] = useState<null | any>(null)
  const [city, setCity] = useState<string>('Berlin')

  const handleCityUpdate: ISearchBarProps['newCity'] = (
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
      <div className="content-centered">
        <NavBar />
        <SearchBar newCity={handleCityUpdate} />
        <div className="weather-wrapper">
          {weatherData ? <Weather weatherData={weatherData} /> : ''}
        </div>

        <Footer />
      </div>
    </>
  )
}
