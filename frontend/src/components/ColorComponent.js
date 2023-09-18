import React, { Component } from 'react'

class ColorComponent extends Component {
  render() {
    return (
      this.props.color('blue')
    )
  }
}

export default ColorComponent;