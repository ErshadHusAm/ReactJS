import React, { Component } from 'react'

class HoverComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increamentCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onMouseOver={this.increamentCount}>Click {this.state.count} Times</button>
            </div>
        )
    }
}
export default HoverComp;