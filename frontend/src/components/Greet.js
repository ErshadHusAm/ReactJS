import React from 'react';

const Greet = (props) => { 
    //------------------------------------- Way 2
    // const {age, name} = props;--------------------------------- WAY 1
    // return <h1>Eid Mubarak {props.name} ====== your age is : {props.age}</h1> --Way 3
    const {age, name, children} = props;
    return (<div>
        <h1>Eid Mubarak {name} ====== your age is : {age}</h1>
        {children}
    </div>)
}

export default Greet;