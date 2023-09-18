import React, { Component } from 'react'

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.increamentCount}>Click {this.props.count} Times</button>
            </div>
        )
    }
}
export default ClickCounter;