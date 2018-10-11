import React from "react"
import ProjectGrid from "./projectGrid"
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
              image={project.image} />)}
        </div>
        <Skills />
        <div className="centerButton">
          <button>se my linkedin</button>
        </div>
      </div>
    )
  }

}

export default LandingPage
