import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class StartPageGrid extends React.Component {

  render() {
    return (
      <div className="gridBox">
        <Link to={`/project/${this.props.id}`}>
          <h3>{this.props.title}</h3>
          <img src={this.props.image} alt="project" />
        </Link>
      </div>
    )
  }

}

export default StartPageGrid
