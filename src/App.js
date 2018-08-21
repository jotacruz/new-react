import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../node_modules/redux';
import { changeValue } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }

  inputChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { 
      changeValue,
      newValue 
    } = this.props;

    const { value } = this.state;

    return (
      <div className="App">
        <input name="teste" onChange={this.input} value={newValue} />
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  value: store.changeState.value
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeValue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
