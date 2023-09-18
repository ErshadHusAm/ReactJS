import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class CompC extends Component {
  render() {
    return (
      <UserConsumer> 
      {
        (v) => (
          <>
            {
                v.isLoggedIn ? <p>Welcome {v.name} </p>: 
                <p>Please log in, Your age is <b>{v.age}</b></p>
            }
          <button onClick={()=>v.login()}>Login</button>
          <br />
          <button onClick={()=>v.logout()}>Logout</button>
        </>
        )
      }
      </UserConsumer>
    )
  }
}

export default CompC;