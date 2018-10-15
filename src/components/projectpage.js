import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ProjectComponent from "./projectcomponent"

const casesJson = require("./cases.json")

class ProjectPage extends React.Component {
  render() {
    const projectInView = casesJson.projects[this.props.match.params.id - 1]
    // console.log(this.props.match.params.id)
    // console.log(projectInView)
    return (
      <div>
        {
          <ProjectComponent
            title={projectInView.title}
            image={projectInView.image}
            description={projectInView.description}
            name={projectInView.name}
            id={projectInView.id}
            codeLink={projectInView.codeLink}
            siteLink={projectInView.siteLink} />
        }
      </div>
    )
  }

}

export default ProjectPage
