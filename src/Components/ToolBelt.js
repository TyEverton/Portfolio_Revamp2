import React from 'react'
import './toolbelt.css'
import { FaGithub } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaGitSquare } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'


const ToolBelt = () => {
  return (
    <div>
      <h3 className = "toolBeltIcons">
        <FaGithub />
        <FaHtml5/>
        <FaReact />
        <FaGitSquare />
        <FaCss3Alt />
        <FaJsSquare />
        <FaNodeJs />

      </h3>
    </div>
  )
}

export default ToolBelt
