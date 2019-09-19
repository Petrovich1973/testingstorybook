import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const {disabled, textButton} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button disabled={disabled}>{textButton}</button>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  /** Some description disabled */
  disabled: PropTypes.bool.isRequired,
  /** Some description textButton */
  textButton: PropTypes.string.isRequired
};

App.defaultProps = {
  disabled: false,
  textButton: "some name"
};

export default App;
