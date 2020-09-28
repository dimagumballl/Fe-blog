import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "../Head.css"
class HUser extends Component {
  render(){
    const{
      Dis
    }=this.props
    return (
      <div>
        <button className="register">Exit</button>
      </div>
    );
  }
  
}

export default HUser;
