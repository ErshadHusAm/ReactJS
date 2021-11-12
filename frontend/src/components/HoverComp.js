import React, { Component } from 'react'
import WithCounter from './HOC/withCounter.js'

class HoverComp extends Component {
    render() {
        return (
            <div>
                <button onMouseOver={this.props.handler}>Click {this.props.count} Times</button> 
            </div>
        )
    }
}
export default WithCounter(HoverComp);