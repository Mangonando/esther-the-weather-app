import React from 'react'
import GithubIcon from './icons/github_icon.svg'
import LinkedinIcon from './icons/linkedin_icon.svg'

export default function Footer() {
  return (
    <>
      <div>Made with ♥️ by.</div>
      <a
        href="https://github.com/Mangonando"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mangonando
      </a>
      <a
        href="https://github.com/Mangonando/esther-the-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubIcon} alt="Github Icon" />
      </a>
      <a
        href="https://github.com/Mangonando/esther-the-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedinIcon} alt="Linkedin Icon" />
      </a>
    </>
  )
}
