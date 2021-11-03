import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor() {
        super()
    
        this.state = {
             data: "This is the data"
        }
    }

    changeMessageHandler = () =>{
        this.setState({
            data: "I am changed data"
        })

    }
    
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <ChildComp message={this.state.data} changeHandler={this.changeMessageHandler}/>
            </div>
            
        )
    }
}

export default ParentComp;
