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
      <section className="toolBeltIcons">
        <div className="htmlIcon">
          <FaHtml5 />
        </div>
        <div>
          <FaCss3Alt />
        </div>
        <div>
          <FaJsSquare />
        </div>
        <div>
          <FaNodeJs />
        </div>
        <div>
          <FaReact />
        </div>
        <div>
          <FaGitSquare />
        </div>
      </section>
    </div>
  )
}

export default ToolBelt
