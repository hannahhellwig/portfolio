import React from "react"
import ProjectGrid from "./projectgrid"
import AboutMe from "./aboutme"
import Skills from "./skills"

const casesJson = require("./cases.json")

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <AboutMe />
        <div className="gridContainer">
          {casesJson.projects.map(project =>
            <ProjectGrid
              title={project.title}
              image={project.image}
              id={project.id} />)}
        </div>
        <Skills />
        <div className="centerButton">
          <a className="button" href="https://www.linkedin.com/in/hannah-hellwig/" target="_blank">se my linkedin</a>
        </div>
      </div>
    )
  }

}

export default LandingPage
