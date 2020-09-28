import React, { Component } from 'react'
import "./Register.css"
import {Link} from "react-router-dom"


class Register extends Component{
    state={
            Name:"",
            Password:"",
            Check:false,
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
      tapC=()=>{
        if(this.state.Check)      
        this.setState({ 
            Check:false
        });
        else
        this.setState({ 
            Check:true
        });
      }
  render(){
      const{
        SendUser
      }=this.props
  return (
    <div className="Register">
        <div className="Title">
            Регистрация
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
            Админ акаунт{"  "}
            <input type="checkbox" name="one" checked={this.state.Check} onClick={this.tapC} />
            <Link to={"/"}>
            <button className="AddB1" onClick={()=>SendUser(this.state.Name,this.state.Check,this.state.Password)}>
              Готово
            </button>
            </Link>
        </div>
    </div>
  );}
}

export default Register;
