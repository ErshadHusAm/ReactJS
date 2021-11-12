import React, { Component } from 'react'
import WithCounter from './HOC/withCounter.js'

class IntervalComp extends Component {
    render() {
        // setInterval(() => {
        //     this.props.handler()
        // }, 2000);
        return (
            <div>
                <p> {this.props.count} Times</p>
            </div>
        )
    }
}
export default WithCounter(IntervalComp);