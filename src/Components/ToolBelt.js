import React from 'react'
import './toolbelt.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaGitSquare } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'


const ToolBelt = () => {
  return (
    <div>
      <h2 className="toolBeltHeader">My Tool Belt</h2>
      <section className="toolBeltIcons">
        <div className="htmlIcon">
          <FaHtml5 />
        </div>
        <div className="cssIcon">
          <FaCss3Alt />
        </div>
        <div className="jsIcon">
          <FaJsSquare />
        </div>
        <div className="nodeIcon">
          <FaNodeJs />
        </div>
        <div className="reactIcon">
          <FaReact />
        </div>
        <div className="gitIcon">
          <FaGitSquare />
        </div>
      </section>
    </div>
  )
}

export default ToolBelt
