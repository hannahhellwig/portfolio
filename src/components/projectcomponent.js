import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class ProjectComponent extends React.Component {

  render() {
    return (
      <div className="caseContainer">
        <div className="backNavContainer">
          <Link to="/"><a className="backNav">&lsaquo; Back</a></Link>
        </div>
        <img src={this.props.image} alt={this.props.name} />
        <div className="caseTextContainer">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <a className="button" href={this.props.sitelink}>See it live</a>
        </div>
        <div className="caseTechSpecsContainer">
          <h3>Tech specs</h3>
          <div className="centerButton">
            <a className="codeButton button" href={this.props.codelink} target="_blank">View the code</a>
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectComponent
