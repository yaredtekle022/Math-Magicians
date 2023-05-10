/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleChange = (e) => {
    const res = Calculate(this.state, e.target.innerHTML);
    this.setState(res);
  };

  render() {
    return (
      <div className="Calculator">
        <form className="row">
          <input
            disabled
            className="res"
            value={this.state.next || this.state.total || 0}
          />
        </form>
        <div className="row">
          <button
            type="button"
            id="AC"
            onClick={this.handleChange}
            className="pads"
          >
            AC
          </button>
          <button
            type="button"
            onClick={this.handleChange}
            id="+/-"
            className="pads"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={this.handleChange}
            id="%"
            className="pads"
          >
            %
          </button>
          <button type="button" onClick={this.handleChange} className="pads">
            &#247;
          </button>
        </div>
        <div className="row">
          <button className="pads" type="button" onClick={this.handleChange}>
            7
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            8
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            9
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            x
          </button>
        </div>
        <div className="row">
          <button className="pads" type="button" onClick={this.handleChange}>
            4
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            5
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            6
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            -
          </button>
        </div>
        <div className="row">
          <button className="pads" type="button" onClick={this.handleChange}>
            1
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            2
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            3
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            +
          </button>
        </div>
        <div className="row">
          <button
            className="pads zero"
            type="button"
            onClick={this.handleChange}
          >
            0
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            .
          </button>
          <button className="pads" type="button" onClick={this.handleChange}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
