import React, { Component } from 'react'
import WithCounter from './HOC/withCounter.js'

class ClickComp extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handler}>Click {this.props.count} Times</button>
            </div>
        )
    }
}
export default WithCounter(ClickComp);