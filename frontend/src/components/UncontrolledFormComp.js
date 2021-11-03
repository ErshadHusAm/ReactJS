import React, { Component } from 'react'

class UncontrolledFormComp extends Component {
    constructor(){
        super();
        this.nameInput = React.createRef();
        this.ageInput = React.createRef();
    }
    // submitHandler = (e) =>{
    //     e.preventDefault();
    //     let name = this.nameInput.current.value;
    //     let age = this.ageInput.current.value;
    //     console.log(name, age);
    // }
    clickHandler = (e) =>{
        e.preventDefault();
        let name = this.nameInput.current.value;
        let age = this.ageInput.current.value;
        console.log(name, age);
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" ref={this.nameInput} />
                <input type="number" name="age" ref={this.ageInput} />
                {/* <input type="submit" value="Submit" /> */}
                <button onClick={this.clickHandler}>Submit</button>
            </form>
        )
    }
}

export default UncontrolledFormComp;
