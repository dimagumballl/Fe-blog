import React, { Component } from 'react'
import "./Head.css"

import{Route} from "react-router-dom"
import HHome from './Bar/HHome';
import HAuth from './Bar/HAuth';
import HUser from './Bar/HUser';

class Head extends Component {
    
    
  render(){
    const{
      name
    }=this.props
    return (
      <div className="Head">
        <div className="TextHead">Вы зашли как {name}</div>
        
        <Route exact path="/" render={()=>(<HHome/>)}/>
        <Route path={"/Register"} render={()=>(<HAuth/>)}/>
        <Route path={"/Singin"} render={()=>(<HAuth/>)}/>
        <HUser/>
      </div>
    );
  }
  
}

export default Head;
