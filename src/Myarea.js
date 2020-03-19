import React, { Component } from 'react'
const Myarea = props => {
    return(
        <div>
            <p>change1</p>
            <h1>{props.nameList}</h1>
            <h1>{props.ageList}</h1>
        </div>);
    
}
    
export default Myarea;