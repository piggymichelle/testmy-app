import React, { Component } from 'react';
import './App.css';
import Myform from './Myform.js';
import Myarea from './Myarea.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myage:'',
      myincome:'',
      id:''
    };
  }
  componentDidMount(){
  
  }

  handleFetch = () => {
    let {myage}= this.state;
    this.getFetchData(myage).then(data => {this.setState({id:data.id})})
    .catch(reason => console.log(reason.message))
  }
  getFetchData = async (name) => {
    // do something
    const response = await fetch(`https://api.github.com/users/${name}`);
    //console.log(response);
    let data = await response.json();
    try{
      if(!response.ok){
        throw('something error when fetch data!');
      } else {
       return data
      }
    } catch (error){
        console.log(error);
    }
  }

  getInput = mystate => {
   let {age, income} = mystate;
   if(age&&income){
     this.setState(
      {
        ...this.state,
        myage:age,
        myincome:income
      }
     );
     
   }
}
       
  
  render() {
    return(
      <div>
      <Myform getInput={mystate => {this.getInput(mystate)}} />
      <Myarea nameList={this.state.myage} ageList={this.state.myincome}/>
      <button onClick={this.handleFetch}>getFetchData</button>
      <h1>{this.state.id}</h1>
      </div>
    )
   
  }
}


export default App;



