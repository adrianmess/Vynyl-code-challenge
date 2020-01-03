import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <b>Instructions:</b> Write some code to flatten an array of
          arbitrarily nested arrays of strings into a flat array of strings
          (e.g., [['one','two',['three']],'four'] ->
          ['one','two','three','four'].
        </p>

        <p>
          Original Nested array:<span id="nestedArray"> </span>
        </p>

        <p>
          Converted nested array into flat array:
          <span id="flatArray"></span>
        </p>
      </div>
    );
  }
}

export default App;
