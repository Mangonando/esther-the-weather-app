import React, { useState } from 'react'
import './SearchBar.css'

export interface SearchBarProps {
  newCity: (city: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ newCity }) => {
  const [input, setInput] = useState<string>('')

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSearchBarSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    newCity(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSearchBarSubmit} className="form">
      <input
        type="text"
        className="search-bar"
        value={input}
        onChange={handleCityChange}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  )
}
