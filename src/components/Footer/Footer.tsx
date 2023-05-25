import React from 'react'
import './Footer.css'
import GithubIcon from '../../icons/github_icon.svg'
import LinkedinIcon from '../../icons/linkedin_icon.svg'

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="text">
          <div>Made with ♥️&nbsp; by&nbsp;</div>
          <a
            href="https://github.com/Mangonando"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Mangonando
          </a>
        </div>
        <div className="social-media-icons">
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
        </div>
      </div>
    </>
  )
}
