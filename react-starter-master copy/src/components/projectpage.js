import React from "react"
import CaseComponent from "./casecomponent"

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: []
    }
  }

  render() {
    return (
      <div>
        <CaseComponent
          title={this.state.project.title}
          image={this.state.project.image}
          name={this.state.project.name} />
      </div>
    )
  }

}

export default ProjectPage
