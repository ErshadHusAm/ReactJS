import React from 'react';

// const Hello = () => {
//     return(
//         <h1>Hello I am from functional comp</h1>
//     )
// }
const Hello = (props) => {
    return(
        <div>
            <h1>Hello I am from functional comp</h1>
            {props.children}
        </div> 
    )
}
export default Hello;