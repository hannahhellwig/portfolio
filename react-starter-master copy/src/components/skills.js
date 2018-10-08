import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div>
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
      </div>
    )
  }

}

export default Skills
