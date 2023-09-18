import React, { Component } from 'react'

class NormalComp extends Component {
     performOperation = (secondDecimal) => {
        
        const firstDecimal = 4.0;
        
        let res2 = firstDecimal + secondDecimal;

        console.log(parseFloat(res2).toFixed(2));
        
    }
    
    
    render() {
        console.log("normal");
        return (
            <div>
                Normal Component = {this.props.count}
                <button className="btn" onClick={()=>this.performOperation(12,4.23,"hello")}>CLick</button>
            </div>
        )
    }
}

export default NormalComp;

//render from MainComp.js