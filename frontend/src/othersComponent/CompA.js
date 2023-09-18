import React, { Component } from 'react'
import CompB from './CompB';
import UserContext from './UserContext';

class CompA extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h4 style={{color : 'red'}}>{this.context.name}</h4>
        <CompB />
      </div>
    )
  }
}
// CompA.contextType = UserContext;
export default CompA;