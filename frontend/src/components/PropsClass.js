import React, {Component} from 'react';

class PropsClass extends Component{
    render(){
        const {role, id, children} = this.props;
        return <div>
            <h1>I am {role},  My id is {id} </h1>
            {children}
        </div>
    }
}
export default PropsClass;