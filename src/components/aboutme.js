import React from "react"

class AboutMe extends React.Component {

  render() {
    return (
      <div className="aboutMe">
        <div className="aboutMeLeft">
          <img src="" alt="Hannah Hellwig" />
          <p>hannahhellwig@hotmail.com</p>
          <p>+ 4673 - 684 51 71</p>
        </div>
        <div className="aboutMeLeft">
          <p>Hannah Hellwig</p>
          <h1> Frontend Developer </h1>
          <p>text about me</p>
          <button>see my github</button>
        </div>
        <div className="techBox">
          <h2>Tech</h2>
          <p>
            • 480 coding hours
            • 50+ individual tasks
            • HTML5, CSS, SASS, Flexbox, Javascript ES6, JSX, React, Node.js, API:s
            • 6 sprints with demos together with companies like
              Volumental, Bonnier, Comprend @ Technigo
          </p>
        </div>
      </div>
    )
  }

}

export default AboutMe
