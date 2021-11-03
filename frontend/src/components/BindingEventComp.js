import React, {Component} from 'react';

class BindingEventComp extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this) //for approach three only
    }

    add(){
        this.setState({
            count : this.state.count +5
        })
    }
    
    addFour = () => {
        this.setState({
            count : this.state.count +5
        })
    }
    
    render(){
        let {count} = this.state;
        return(
            <div>
                <h1>{count}</h1>
                <button className="btn" onClick={this.add.bind(this)}>Add one</button> {/*way 1*/}
                <button className="btn" onClick={()=> this.add()}>Add two</button> {/*way 2*/}
                <button className="btn" onClick={this.add}>Add three</button> {/*way 3 Also best*/}
                <button className="btn" onClick={this.addFour}>Add four</button> {/*way 4 - Best way*/}
            </div>
        )
    }
}

export default BindingEventComp;
