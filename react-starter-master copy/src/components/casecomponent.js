import React from "react"

class CaseComponent extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.name} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button src={this.props.livelink}>See it live</button>
        <h2>Tech specs</h2>
        <button src={this.props.codelink}>View the code</button>
      </div>
    )
  }

}

export default CaseComponent
