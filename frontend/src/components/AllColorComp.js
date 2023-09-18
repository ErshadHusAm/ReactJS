import React, { Component } from 'react'
import ColorComp from './ColorComp';
import ErrorBoundary from './ErrorBoundary';

class AllColorComp extends Component {
    render() {
        return (
            <div>   
                <ErrorBoundary>
                    <ColorComp name="black"/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ColorComp name="red"/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ColorComp name="blue"/>
                </ErrorBoundary>
            </div>
        )
    }
}
export default AllColorComp;