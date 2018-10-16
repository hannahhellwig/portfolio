import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div>
        <h2>Skills</h2>
        <div className="skillsContainer">
          <div className="codeList list">
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
          <div className="toolboxList list">
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
          <div className="moreList list">
            <h3>More</h3>
            <ul>
              <li>Concept development</li>
              <li>Agile methodology</li>
            </ul>
          </div>
        </div>
        <h2>Studies</h2>
        <div className="studiesContainer">
          <div className="studiesBox list">
            <h3>Frontend Developer</h3>
            <p>Full-time 12 w boot camp/intensive program. Covering everything
            from the basics of programing to how to sturcture and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50+ individual tasks (in HTML,
             CSS JavaScript, JSX, React and Node.js) and six sprints with demos together with
             companies like Volumental, Bonnier News, Comprend and Svenska Spel. Sthlm Sep-Nov 2018
            </p>
          </div>
          <div className="studiesBox list">
            <h3>Sculpture Artist</h3>
            <p>Full-time two year education in sculpture art at Konstskolan Idun Lovén.
            Sthlm Aug 2016 - May 2018.
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills
