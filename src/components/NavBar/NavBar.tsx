import React from 'react'
import { motion } from 'framer-motion'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <motion.div
          className="nav-bar-icon"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 100,
          }}
        >
          🌬
        </motion.div>
        <div className="nav-bar-header">Esther</div>
      </div>
    </>
  )
}
