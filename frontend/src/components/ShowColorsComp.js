import React from 'react'
import './compStyle.css'

function ShowColorsComp({color,styleClass}) {
    return (
        <div className={styleClass}>
            <h1>{color}</h1>
        </div>
    )
}

export default ShowColorsComp