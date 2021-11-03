import React from 'react'

function ChildComp({changeHandler}) {
    return (
        <div>
            {/* <h2>{message}</h2> */}
            <button onClick={changeHandler} className="btn">Click</button>
        </div>
    )
}

export default ChildComp;
