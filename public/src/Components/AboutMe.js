import React from 'react'
import ProfilePic from "./Images/ProfilePic.jpg"
import './aboutme.css'


const AboutMe = () => {
  return (
    <div>
      <img className="selfPhoto" alt="Ty Everton" src={ProfilePic}/>
      <h3 className="aboutMeIntro">About Me</h3>
      <h3 className="nameIntro">I am Ty Everton, and I am a Web Developer.</h3>
      <section className="aboutMeContainer">
        <p className="aboutMeBody">
          I am a Web Developer with a background in sales. My 4 years of sales
          experience gives me a strong foundation of client interaction,
          understanding and delivery. Being able to ask the right questions and
          dig deeper allows me to get an accurate idea of what the client is
          wanting and needing. As a recent graduate of Devmountain's Web
          Development Boot Camp, I am ready and excited to break into the
          industry and make a positive impact!
        </p>
      </section>
    </div>
  )
}

export default AboutMe
