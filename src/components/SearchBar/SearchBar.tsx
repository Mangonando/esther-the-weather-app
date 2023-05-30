import React, { useState } from 'react'
import './SearchBar.css'
import { motion } from 'framer-motion'

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
      <motion.input
        type="text"
        className="search-bar"
        value={input}
        onChange={handleCityChange}
        whileHover={{ scale: 1.1 }}
      />
      <motion.button
        type="submit"
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
      >
        Search
      </motion.button>
    </form>
  )
}
