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
            <li><Link to="/landingPage">Start Page</Link></li>
            <li><Link to="/projectPage" >Project Page</Link></li>
            <Route path="/landingPage" component={LandingPage} />
            <Route path="/projectPage" exact="true" component={ProjectPage} />
            <Route path="/project/:id" component={ProjectPage} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App
