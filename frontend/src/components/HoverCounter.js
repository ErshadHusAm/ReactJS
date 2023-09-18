import React, { Component } from 'react'

class HoverCounter extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.increamentCount}>Click {this.props.count} Times</h1>
            </div>
        )
    }
}
export default HoverCounter;