import React, { Component } from 'react'

export class DigitalClicker extends Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked : 0
    };
  }
  handler = () =>{
    this.setState (previousState => {
      return {
        timesClicked : previousState.timesClicked + 1
      } 
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.handler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker

