import React, { Component } from 'react'
import CompC from './CompC';
import { UserConsumer } from './UserContext';
// import { UserConsumer } from './UserContext';

class CompB extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (value) => (
              
            <CompC />
            
          )
        }
      </UserConsumer>
    )
  }
}

export default CompB;