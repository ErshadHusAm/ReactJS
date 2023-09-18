import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  hasError: false
        }
    }

    static getDerivedStateFromError(err){
        return {
            hasError: true
        }
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>May be some error</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;