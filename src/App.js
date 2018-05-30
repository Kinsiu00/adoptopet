import React, { Component } from 'react';


class App extends Component {
  state = {
    puppy: []
  }

  componentWillMount = async () => {
    const response = await fetch("/puppy")
    const json = await response.json()
    console.log(json)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
