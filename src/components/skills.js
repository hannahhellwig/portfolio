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
              <li>MongoDb</li>
            </ul>
          </div>
          <div className="toolboxList list">
            <h3>Toolbox</h3>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Fincal Cut</li>
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
        <h2>Experience</h2>
        <div className="studiesContainer">
          <div className="studiesBox list">
            <h3>Frontend Developer</h3>
            <p>
            Full-time 12 w boot camp/intensive program. Covering everything from
            the basics of programming to how to structure and build bigger web
            projects. Focus on JavaScript. Total 480 coding hours, 35+ individual
            tasks (in HTML, CSS JavaScript, JSX, React and Node.js) and six
            sprints with demos together with companies like Volumental, Bonnier
            News, Comprend, Svenska Spel and Fyndiq. Sthlm Sep-Nov 2018
            </p>
          </div>
          <div className="studiesBox list">
            <h3>Sculpture Artist</h3>
            <p>
            Full-time two year education in sculpture art at Konstskolan Idun Lovén.
            Sthlm Aug 2016 - May 2018. The education contained courses including sculpture,
            sketching, working on your own artistic works, thematic work, planing exhibitions,
            artistic workshops, photo and video editing, writing, art history and guest
            lectures with artists.
            </p>
          </div>
          <div className="studiesBox list">
            <h3>Visual Art</h3>
            <p>
            Education in visual art at Sigtuna Folkhögskola, Sthlm Aug 2015 - May 2016.
            Content including sketching, drawing, art history, individuall project,
            painting, sculpure, screentryck and Adobe Illustrator.
            </p>
          </div>
          <div className="studiesBox list">
            <h3>Event Organizer</h3>
            <p>
            I worked together with the the management team planing a festival for
            10 000 visitors and was responsible for about one seventh of the work.
            I directly managed 7 people working with the festival and through them 80
            people indirectly. I was responsible for vision, development, recruitment,
            budget and follow up for my area. And  I worked with the rest of the
            management team in long-term strategic work.
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills
