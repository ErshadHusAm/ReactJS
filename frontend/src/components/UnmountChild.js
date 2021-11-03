import React, { Component } from 'react'

class UnmountChild extends Component {
    componentWillUnmount(){
        console.log("I am unmount ---------");
    }
    render() {
        return (
            <>
              <h1>Hello</h1>  
            </>
        )
    }
}
export default UnmountChild