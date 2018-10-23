import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ProjectComponent from "./projectcomponent"

const casesJson = require("./cases.json")

class ProjectPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const projectInView = casesJson.projects[this.props.match.params.id - 1]

    return (
      <div>
        <div className="backNavContainer">
          <Link to="/" className="backNav">&lsaquo; Back</Link>
        </div>
        {
          <ProjectComponent
            title={projectInView.title}
            image={projectInView.image}
            description={projectInView.description}
            name={projectInView.name}
            id={projectInView.id}
            codeLink={projectInView.codeLink}
            siteLink={projectInView.siteLink}
            alt={projectInView.alt} />
        }
        <h3>Tech specs</h3>
        <div className="caseTechSpecsContainer">
          <div className="caseTechSpecBox list">
            <h4>Code</h4>
            <ul>
              {projectInView.code.map(item => <li>{item}</li>)}
            </ul>
          </div>
          <div className="caseTechSpecBox list">
            <h4>Toolbox</h4>
            <ul>
              {projectInView.toolbox.map(item => <li>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="centerButton">
          <a className="codeButton button" href={projectInView.codeLink} target="_blank">View The Code</a>
        </div>
      </div>
    )
  }

}

export default ProjectPage
