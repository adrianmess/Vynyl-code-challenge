import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const nestedArray = [["one", "two", ["three"]], "four"];

    function RecursiveFlat(nestedArray) {
    return nestedArray.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(RecursiveFlat(val)) : acc.concat(val),
      []
    );
  }
    return (
      <div className="App">
        <p>
          <b>Instructions:</b> Write some code to flatten an array of
          arbitrarily nested arrays of strings into a flat array of strings
          (e.g., [['one','two',['three']],'four'] ->
          ['one','two','three','four'].
        </p>

        <p>
          <b>Original Nested array:</b>
          <span id="nestedArray"> {JSON.stringify(nestedArray)} </span>
        </p>

        <p>
          <b>Converted nested array into flat array:</b>
          <span id="flatArray">
             {JSON.stringify(RecursiveFlat(nestedArray))}
          </span>
        </p>
      </div>
    );
  }
}

export default App;
