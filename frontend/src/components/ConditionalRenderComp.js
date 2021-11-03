import React, { Component } from 'react'

class ConditionalRenderComp extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedin : true,
            message : ""
        }
    }
    render() {
        const {isLoggedin, message} = this.state;
        

        // Way 3
        return message && isLoggedin ? <h1>I am logged in {message}</h1> : <h1>Please log in</h1>

        // Way 2
        // let element;
        // if (isLoggedin) {
        //     element = <h1>I am logged in</h1>    
        // } else{
        //     element = <h1>Please log in</h1>
        // }

        // return(
        //     <div>
        //         <h1>{element}</h1>
        //     </div>
        // )

        // Way 1
        // if (isLoggedin) {
        //     return (
        //         <div>
        //             <h1>I am logged in</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>Please log in</h1>
        //         </div>
        //     )
        // }
    }
}

export default ConditionalRenderComp;

// IF Else
// element VAR
// turnary operator 
// Short circuit operator