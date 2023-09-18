import React, { Component } from 'react'
import CounterComponent from '../CounterComponent';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class ParentCounter extends Component {
  render() {
    return (
      <div>
        <CounterComponent 
            render={(count, increamentCount) => (<ClickCounter count={count} increamentCount={increamentCount}/>) }
        />
        <CounterComponent 
            render={(count, increamentCount) => (<HoverCounter count={count} increamentCount={increamentCount}/>) }
        />
      </div>
    )
  }
}

export default ParentCounter;