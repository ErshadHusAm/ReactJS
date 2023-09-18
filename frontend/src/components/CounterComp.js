import React, { Component } from 'react'

class CounterComp extends Component {
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
                
            </div>
        )
    }
}
export default CounterComp;