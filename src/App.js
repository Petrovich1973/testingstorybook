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
            Edit s <code>src/App.js</code> and save to reload.
            <span className="box box-orange">текст в боксе</span>
            <button className="box-black" disabled={disabled}>{textButton}</button>
            <button className="box-blue" disabled={disabled}><small>{textButton}</small></button>
            <button className="box-orange" disabled={disabled}><small>{textButton}</small></button>
            <button className="box-green" disabled={disabled}><small>{textButton}</small></button>
            <button className="box-red" disabled={disabled}><small>{textButton}</small></button>
            <button disabled={disabled}>{textButton}</button>
          </p>
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
