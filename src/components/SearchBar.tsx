import React, { useState } from 'react'

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
    <form onSubmit={handleSearchBarSubmit}>
      <input
        type="text"
        className="i-box"
        value={input}
        onChange={handleCityChange}
      />
      <button type="submit" className="i-box">
        Search
      </button>
    </form>
  )
}
