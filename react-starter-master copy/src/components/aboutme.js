import React from "react"

class AboutMe extends React.Component {

  render() {
    return (
      <div>
        <img src="" alt="Hannah Hellwig" />
        <p>contact information</p>
        <div className="presentationOfMe">
          <p>Hannah Hellwig</p>
          <h1> Frontend Developer </h1>
          <p>text about me</p>
          <button>see my github</button>
        </div>
        <div className="tech">
          <h2>Tech</h2>
          <ul>
            <li>480 coding hours</li>
            <li>50+ individual tasks</li>
            <li>HTML5, CSS, SASS, Flexbox, Javascript ES6, JSX, React, Node.js, API:s</li>
            <li>
              6 sprints with demos together with companies like
              Volumental, Bonnier, Comprend @ Technigo
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default AboutMe
