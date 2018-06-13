import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Hello (props) {
  return <h2>{props.title}</h2>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Welcome to react from Muki props"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
