import React from "react"

class ProjectGrid extends React.Component {

  render() {
    return (
      <div className="gridBox">
        <h5>{this.props.title}</h5>
        <img src={this.props.image} alt="project" />
      </div>
    )
  }

}

export default ProjectGrid
