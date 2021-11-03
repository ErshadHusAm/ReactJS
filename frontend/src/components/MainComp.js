import React, { Component } from 'react'
import MemoComp from './MemoComp';
import NormalComp from './NormalComp';
import PureComp from './PureComp';

class MainComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }
    }
    // clickHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         count: this.state.count +1
    //     })
    // }

    // shouldComponentUpdate(nextProps, nextState){ 
    //     // Return false if do not want to update component or recall the render
    //     if (nextState.count !== this.state.count){
    //         return true;
    //     }
        
    //     else return false
    // }

    componentDidMount(){
        setInterval(()=>{
            this.setState({count:10})
        },2000)
    }
    
    render() {
        console.log("updating");
        return (
            <div>
                <h2>{this.state.count}</h2>
                {/* <button className="btn" onClick={this.clickHandler}>click</button> */}
                <PureComp count={this.state.count}/>
                <NormalComp count={this.state.count}/>
                <MemoComp count={this.state.count}/>
            </div>
        )
    }
}
export default MainComp;