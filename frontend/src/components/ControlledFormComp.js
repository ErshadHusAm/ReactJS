import React, { Component } from 'react'

class ControlledFormComp extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: 0,
            language: '',
            colors: []
        }

    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    checkboxChangeHandler = (e) => {
        if(e.target.checked){
            this.setState({
                colors: [...this.state.colors, e.target.value]
            })
        } else if (!e.target.checked){
            let i = this.state.colors.indexOf(e.target.value)
            let res = this.state.colors.slice(i-1,i);
            this.setState({
                colors: [...res]
            })
        }
    }
    
    clickHandler = (e) =>{
        e.preventDefault();
        const {name, age, language} = this.state;
        console.log(name, age, language);
    }
   
    render() {
        console.log(this.state.colors);
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                <input type="number" name="age" value={this.state.age} onChange={this.changeHandler}/>
                <br />
                <label >Select language</label>
                <br />
                <select name="language" value={this.state.language} onChange={this.changeHandler}>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                </select>
                <br />
                <input type="checkbox" name="color1" value="Red" onChange={this.checkboxChangeHandler}/>
                <label>Red</label><br />
                <input type="checkbox" name="color2" value="Blue" onChange={this.checkboxChangeHandler}/>
                <label>Blue</label><br />
                <input type="checkbox" name="color3" value="Green" onChange={this.checkboxChangeHandler}/>
                <label>Green</label><br />
                <button onClick={this.clickHandler}>Submit</button>
                <br />
                
            </form>
        )
    }
}

export default ControlledFormComp;
