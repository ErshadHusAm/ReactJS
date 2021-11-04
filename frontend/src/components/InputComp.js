import React, { Component } from 'react'

class InputComp extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef()
    }
    focusInput = () => {
        this.inputRefs.current.focus()
    }
    componentDidMount(){
        console.log(this.inputRefs.current);
    }
    
    render() {
        return (
            <input type="text" ref={this.inputRefs} />
        )
    }
}
export default InputComp