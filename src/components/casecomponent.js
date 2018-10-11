import React from "react"

class CaseComponent extends React.Component {

  render() {
    return (
      <div className="caseContainer">
        <img src={this.props.image} alt={this.props.name} />
        <div className="caseTextContainer">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <button src={this.props.livelink}>See it live</button>
        </div>
        <h3>Tech specs</h3>
        <div className="centerButton">
          <button className="codeButton"src={this.props.codelink}>View the code</button>
        </div>
      </div>
    )
  }

}

export default CaseComponent
