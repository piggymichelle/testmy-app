import React, { Component } from 'react';

class Myform extends React.Component{
    constructor(props){
        super(props);
        this.state={mystate:{}}
    }
    
    handleChangle = e => {
        let {mystate} = this.state;
        mystate[e.target.name] = e.target.value;
        this.setState({mystate});
        
    }
    handleClick = e => {   
        this.props.getInput(this.state.mystate);
    }
    render(){
        return(
            <div>
                <input name='age' onChange = {e => {this.handleChangle(e)}}></input>
                <br />
                <input name='income' onChange = {e => {this.handleChangle(e)}}></input>
                <button onClick={this.handleClick}>Submit</button>
                <br />
            </div>
        )
    }
}
export default Myform;