import React, { Component } from 'react'
import UnmountChild from './UnmountChild'

class UnmountComp extends Component {
    constructor(){
        super()
        this.state = {
            text: {
                data: '',
                id: ''
            },
            allText: [],
            switch: true
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : {data:e.target.value,id:String(+new Date())}
        })
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.setState({
            allText: [...this.state.allText, this.state.text]
        })
        e.target.value = ''
    }

    removeHandler = (e, id) => {
        let {allText} = this.state;
        var res = allText.filter(ele => ele.id !== id);
        this.setState({
            allText : res
        })
    }
    switchHandler = () => {
        this.setState({
            switch: !this.state.switch
        })

    }
    render() {
        // console.log(this.state.text);
        return (
            <div>
                {this.state.switch ?
                <UnmountChild/> :
                <div>
                    <input 
                    type="text"
                    name="text"
                    onChange={this.changeHandler}
                    value={this.state.text?.data}
                    />
                    <button className="btn" onClick={this.clickHandler}>Submit</button>
                    {
                        this.state.allText.map((ele)=>(
                            <div key={ele.id}>
                                <h1>{ele.data}-{ele.id}</h1>
                                <button onClick={(e)=>this.removeHandler(e, ele.id)}>Remove</button>
                            </div>
                        ))
                    }
                </div>}
                 <button 
                 className="btn"
                 onClick={this.switchHandler}
                 >Switch</button>
            </div>
        )
    }
}
export default UnmountComp