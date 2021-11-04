import React, { Component } from 'react'

class ClickComp extends Component {
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
                <button onClick={this.increamentCount}>Click {this.state.count} Times</button>
            </div>
        )
    }
}
export default ClickComp