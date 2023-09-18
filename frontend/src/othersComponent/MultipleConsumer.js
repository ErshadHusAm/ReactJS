import React, { Component } from 'react'
import { ProductConsumer } from './ProductContext';
import { UserConsumer } from './UserContext';

class MultipleConsumer extends Component {
  render() {
    return (
      <UserConsumer>
          {
              (userValue) => (
                  <ProductConsumer>
                      {
                          (productValue) => (
                            <div>
                            <h1>Name is {userValue.name}</h1>
                            <h1>Product : {productValue}</h1>
                            </div>
                          )
                      }
                  </ProductConsumer>
              )
          }
      </UserConsumer>
    )
  }
}

export default MultipleConsumer;