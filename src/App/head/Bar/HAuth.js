import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "../Head.css"
class HAuth extends Component {
  render(){
    const{
      Dis
    }=this.props
    return (
      <div>
        <Link to={"/"}>
        <button className="register">Home</button>
        </Link>
      </div>
    );
  }
  
}

export default HAuth;
