import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
   
    render() {
        console.log("pure");
        return (
            <div>
                Pure Component - {this.props.count}
            </div>
        )
    }
}
export default PureComp;

//render from MainComp.js