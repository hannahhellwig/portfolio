import React from "react"

class AboutMe extends React.Component {

  render() {
    return (
      <div className="aboutMe">
        <div className="aboutMeLeft">
          <img src="./images/hannahhellwig.jpeg" alt="Frontend Developer Hannah Hellwig" />
          <p>hannahhellwig@hotmail.com</p>
          <p>+ 4673 684 51 71</p>
        </div>
        <div className="aboutMeRight">
          <p>Hannah Hellwig</p>
          <h1> Frontend Developer </h1>
          <p>
            Hello! I’m Hannah and I love to create! I have been creating
            things with my hands by sculpturing in various materials and
            sketching things for the past years and I recently found my
            passion for creating things with code as a frontend developer.
            My passion is creating new solutions to building things and
            problem solving.
          </p>
          <div className="buttonContainer">
            <a className="button" href="https://github.com/hannahhellwig" target="_blank">See my GitHub</a>
          </div>
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
