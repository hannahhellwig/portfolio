import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class ProjectGrid extends React.Component {

  render() {
    return (
      <div className="gridBox">
        <Link to={`/project/${this.props.id}`}>
          <h3>{this.props.title}</h3>
          <img src={this.props.image} alt="" />
        </Link>
      </div>
    )
  }

}

export default ProjectGrid
