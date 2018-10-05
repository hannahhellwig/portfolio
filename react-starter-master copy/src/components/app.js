import React from "react"

class App extends React.Component {

  render() {
    const myVar = 10

    return (
      <div>
        <div className="mainContainer">
          Hello! {myVar + 1}
        </div>
        Find me in src/components/app.js!
      </div>
    )
  }

}

export default App
