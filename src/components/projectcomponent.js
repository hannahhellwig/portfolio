import React from "react"

class ProjectComponent extends React.Component {

  render() {
    return (
      <div className="caseContainer">
        <img src={this.props.image} alt={this.props.alt} />
        <div className="caseTextContainer">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }

}

export default ProjectComponent
