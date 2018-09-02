import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect, Provider} from 'react-redux'

import { fetchPlaces } from './actions/placeActions';

import Select from './Select';
import Loader from './components/Loader';

import logo from './logo.svg';
import './App.css';

import { citiesOptions } from './constants/cities';

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaces()
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div data-testid="main-div" className="App-intro">
          <Select
            defaultValue={citiesOptions[0]}
            options={citiesOptions}
            placeholder="Select a city..."
          />
          {/* <Loader show /> */}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ places: { isLoading } }) => ({ isLoading }),
  { fetchPlaces }
)(App);
