import React, { useState } from 'react'

export default function SearchBar() {
  const [input, setInput] = useState<string>('')

  const handleCityChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setInput(e.target.value)
  }

  const handleSearchBarSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setCity(input)
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
