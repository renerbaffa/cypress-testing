import React, { Component } from 'react';

import Select from './Select';

import logo from './logo.svg';
import './App.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div data-testid="main-div" className="App-intro">
          <Select options={options} />
        </div>
      </div>
    );
  }
}

export default App;
