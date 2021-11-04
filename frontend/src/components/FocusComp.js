import React, { Component } from 'react'
import InputComp from './InputComp'

class FocusComp extends Component {
    constructor(props) {
        super(props)
    
        this.inputCompRefs = React.createRef()
        
    }
    clickHandler = () => {
        this.inputCompRefs.current.focusInput()
    }

    render() {
        
        return (
            <>
            <InputComp ref={this.inputCompRefs} />
            <button className="btn" onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}
export default FocusComp