import './App.css'
import { React } from 'react'
import ContactForm from './Components/ContactForm'
import ToolBelt from './Components/ToolBelt'
import ResumeDownload from './Components/ResumeDownload'
import AboutMe from './Components/AboutMe'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import ReactDOM from "react-dom"

ReactDOM.render(
      <ContactForm />
      <ToolBelt />
      <ResumeDownload />
      <AboutMe />
      <NavBar />
      <Projects />,
      document.getElementById('root')
  )


export default App
