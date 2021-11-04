import React, { Component } from 'react'
import ClickComp from './ClickComp';
import HoverComp from './HoverComp';

class HigherOrderComp extends Component {
    render() {
        return (
            <>
            <ClickComp />
            <HoverComp />
            </>
        )
    }
}

export default HigherOrderComp;