import React, { Component } from 'react'
import {Link} from "react-router-dom"

import "../Head.css"
class HHome extends Component {
  render(){
    const{
      Dis
    }=this.props
    return (
      <div>
        <Link to={"/Register"}>
          <button className="register">Register</button>
        </Link>
        <Link to={"/Singin"}>
        <button className="register">Log-in</button>
        </Link>
      </div>
    );
  }
  
}

export default HHome;
