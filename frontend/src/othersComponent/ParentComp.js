import React, { Component } from 'react'
import CompA from './CompA';
import MultipleConsumer from './MultipleConsumer';
import { ProductProvider } from './ProductContext';
import { UserProvider } from './UserContext';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'rodela',
         age: 25,
         isLoggedIn: false
      }
    }

      loginHandler = () => {
        this.setState({
          isLoggedIn: true
        })
      }
      
      logoutHandler = () => {
        this.setState({
          isLoggedIn: false
        })
      }
    
  render() {
    return (
      <UserProvider value = {{...this.state, login: this.loginHandler, logout: this.logoutHandler}}>
        <CompA />
        <ProductProvider>
          <MultipleConsumer/>
        </ProductProvider>
      </UserProvider>
    )
  }
}

export default ParentComp;