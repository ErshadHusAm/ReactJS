import React from 'react';

class MyClassComp extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Husam",
            id: "1"
        }
    }
    render(){
        const {name, id} = this.state //object destructered
        return <h1>Hello I am {name} my id is {id} from class component</h1>
    }
    
}

export default MyClassComp;