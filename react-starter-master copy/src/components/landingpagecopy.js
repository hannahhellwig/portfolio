import React from "react"
import ProjectGrid from "./projectGrid"

class LandingPage extends React.Component {

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
          <div className="gridContainer">
            <ProjectGrid />
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="codeList">
            <h3>Code</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>SASS</li>
              <li>GitHub</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="toolboxList">
            <h3>Toolbox</h3>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Keynote</li>
              <li>Slack</li>
            </ul>
          </div>
          <div className="moreList">
            <h3>More</h3>
            <ul>
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="studies">
          <h2>Studies</h2>
          <div className="studiesFrontend">
            <h3>Frontend Developer</h3>
            <p>Full-time 12 w boot camp/intensive program osv</p>
          </div>
        </div>
        <button>se my linkedin</button>
      </div>
    )
  }

}

export default LandingPage
