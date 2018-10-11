import React from "react"
import CaseComponent from "./casecomponent"

const casesJson = require("./cases.json")

class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <CaseComponent
          title={casesJson.projects[0].title}
          image={casesJson.projects[0].image}
          description={casesJson.projects[0].description}
          name={casesJson.projects[0].name} />
      </div>
    )
  }

}

export default ProjectPage
