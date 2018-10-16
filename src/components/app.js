import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Footer from "./footer"
import LandingPage from "./landingpage"
import ProjectPage from "./projectpage"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <div className="pageContent">
            <Route path="/" exact="true" component={LandingPage} />
            <Route path="/project" exact="true" component={ProjectPage} />
            <Route path="/project/:id" component={ProjectPage} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App
