import React, { Component } from 'react'
import "./Register.css"
import {Link} from "react-router-dom"


class Singin extends Component{
    state={
        Name:"",
        Password:"",
    }
    tapN=(e)=>{   
        this.setState({ 
            Name:e.target.value
        });
      }
      tapP=(e)=>{      
        this.setState({ 
            Password:e.target.value
        });
      }
  render(){
      const{
        CheckNameAndPassword
      }=this.props
  return (
    <div className="Register">
        <div className="Title">
            Вход
        </div>
        <div className="NameStr">
            Имя
            <input type='text' value={this.state.Name} onChange={this.tapN}></input>
        </div>
        <div className="PasswordStr">
            Пароль
            <input type='password' value={this.state.Password} onChange={this.tapP}></input>
        </div>   
        <div className="PasswordStr">
        <Link to={"/"}>
            <button className="AddB1" onClick={()=>CheckNameAndPassword(this.state.Name,this.state.Password)}>
              Вход
            </button>
        </Link>    
        </div>
    </div>
  );}
}

export default Singin;
