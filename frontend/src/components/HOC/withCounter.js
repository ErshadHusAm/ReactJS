import React, { Component } from 'react'

const WithCounter = (ChildComp) => {
    class UpdatedComp extends Component {
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
            return <ChildComp count={this.state.count} handler={this.increamentCount} {...this.props}/>
        }
    }
    return UpdatedComp;
}
export default WithCounter;