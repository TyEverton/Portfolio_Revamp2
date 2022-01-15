import React from 'react'
import './navbar.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div>
      <section className='navBar'>
        <div className="linkedInIcon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tyeverton/"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="gitHubIcon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TyEverton"
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  )
}

export default NavBar
