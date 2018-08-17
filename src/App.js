import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {teste: ""}
  }
  render() {
    return (
      <div className="App">
        <input name="teste" value={this.state.teste} />
        <h1>{this.state.teste}</h1>
      </div>
    );
  }
}

export default App;
