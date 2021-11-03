import React, { Component } from 'react';

class StateComp extends Component {
    constructor(){
        super();
        this.state = {
            message: "This is from state",
            count: 0
        }
    }
    messageChangeHandler(){
        this.setState({
            message: this.state.message+" CHANGED"
        })
    }

    add(){
        this.setState({
            count: this.state.count +1
        })
    }
    remove(){
        this.setState({
            count: this.state.count -1
        })
    }
    reset(){
        this.setState({
            message: "This is from state",
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1><br />
                <h1>{this.state.count}</h1>
                <button className="btn" onClick={this.messageChangeHandler.bind(this)}>Change text</button>
                <button className="btn" onClick={this.add.bind(this)}>+</button>
                <button className="btn" onClick={this.remove.bind(this)}>-</button>
                <button className="btn" onClick={this.reset.bind(this)}>reset</button>
            </div>
        )
    }
}
export default StateComp;