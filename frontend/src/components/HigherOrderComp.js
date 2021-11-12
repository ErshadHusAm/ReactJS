import React, { Component } from 'react'
import ClickComp from './ClickComp';
import HoverComp from './HoverComp';
import IntervalComp from './IntervalComp';

class HigherOrderComp extends Component {
    render() {
        return ( 
            <>
            <ClickComp name="husam" age={99}/>
            <HoverComp />
            <IntervalComp />
            </>
        )
    }
}

export default HigherOrderComp;