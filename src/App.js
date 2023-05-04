/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="folder">
        <Calculator />
      </div>
    );
  }
}

export default App;
