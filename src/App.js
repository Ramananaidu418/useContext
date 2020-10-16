import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {v4 as newId}  from "uuid";

import Errormsg from "./Components/Errormsg/Errormsg";
class App extends React.Component {
  state = {
    error: [
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Example of a longer error message which takes more than one row",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
    ],
    isOpen: true,
  };
  

  // state = {
    //isOpen: true,
  //
  items = [];
  Selection = (id) =>{
    if(!this.items.includes(id)){
        this.items.push(id);
        //console.log(this.items,"if")
    }else {

      this.items=this.items.splice(this.items.indexOf(id),1);
     // console.log(this.items,"else")

    }

}
onSubmit=()=>{
  
  if(this.items.length === 0){
    alert("your not selected any items");
    //console.log(this.items,"if1")

  }else{
    alert(this.items)
  }
}

  render() {
    return (
      <div className="app">
        {this.state.isOpen? 
        <div className="popup">
          <div className="top">
            <h1>Validation Results</h1>
          </div>
          <div className="middle">
            {this.state.error.map((per) => {
              return (
                <Errormsg
                {...per} 
                //key={per.errorId}
                  // name={per.nodename}
                  // id={per.errorId}
                  // message={per.message}
                  Selection = {this.Selection}
                />
              );
            })}
          </div>
          <div className="close">
             
            <div className="btn">

              <p onClick={() => this.setState({ isOpen: false })}>close</p>
            </div>
            <div className="btn submitBtn" onClick={this.onSubmit}>
            <p>submit</p>
            </div> 
          </div>
        </div>:""}
      </div>
    );
  }
}

export default App;
