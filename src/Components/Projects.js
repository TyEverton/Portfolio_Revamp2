import React from 'react'
import './projects.css'
import GoogleProject from './Images/GoogleProject.jpg'
import MealItYourWay from './Images/MealItYourWay.jpg'

const Projects = () => {
  return (
    <div>
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectContainer">
        <section className="mealProjectBody">
          <img
            alt="MealItYourWay Snippet"
            className="mealPhoto"
            src={MealItYourWay}
          ></img>
          <h3 className="mealProjectHeader">Meal It, Your Way (in progress)</h3>
          <section className="mealItSummary">
            <p>Techologies Used: Figma</p>
            <p>
              Technologies to be Used: React, Google Places API, PostgreSQL,
              Massive
            </p>
              </section>
        </section>
        <section className="googleCloneProjectBody">
          <img
            alt="Google Clone Snippet"
            className="googleClonePhoto"
            src={GoogleProject}
          />
          <h3 className="googleCloneHeader">Google Clone</h3>
          <section className="googleCloneSummary">
            <p>Technologies Used: React, CSS, HTML <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TyEverton/Google_Clone"
            >
              Github
            </a></p>
            
          </section>
        </section>
      </div>
    </div>
  )
}

export default Projects
