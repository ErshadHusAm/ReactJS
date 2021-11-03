import React, { Component } from 'react'

class MemoRef extends Component {
    constructor(props) {
        super(props)

        this.firstNameRef = React.createRef();

        this.state = {
            name:""
        }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    clickHandler = () =>{
        console.log(this.firstNameRef.current.value);
    }

    componentDidMount(){
        this.firstNameRef.current.focus()
    }
    
    render() {
        
        return (
            <div>
                <input type="text" name="firstName" ref={this.firstNameRef} onChange={this.changeHandler} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default MemoRef;