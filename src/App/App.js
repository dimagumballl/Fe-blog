import React, { Component } from 'react'
import Head from './head/Head'
import Body from './body/Body'
import{Route} from "react-router-dom"
import "./App.css"
import Register from './Register/Register'
import Log from './SingIn/Singin'
import axios from 'axios'

class App extends Component{
  state={
    Userdata:
    {
      name:"Гость",
      role:[],
      userid:""
    },
    user:[]
    
  }
  CheckNameAndPassword=(n,p)=>{
    this.UpDate()
    let c = false
    let r
    let id 
        for(let i = 0;i<this.state.user.length;i++){
          
            if(this.state.user[i].name==n)
              {
                c=true
                if(this.state.user[i].password==p)
                  {
                    c=true
                    r=this.state.user[i].role
                    id=this.state.user[i]._id
                  }
              }
              
            
        }
      if(c==false){
        alert("Неправильный пароль или имя")
      }
      else{
        this.SetUser(n,r,id)
      }
  }
  SetUser=(n,r,i)=>{
    this.setState(({
      Userdata:{
        name:n,
        role:r,
        userid:i
      }
      
    }))
  }


  CheckNewName=(n)=>{
    this.UpDate()
    let c = true
        for(let i = 0;i<this.state.user.length;i++){
          
            if(this.state.user[i].name==n)
              c=false
        }
      this.UpDate()
    return c
  }
  UpDate=()=>{
    axios.get(`http://localhost:5001/user/users`)
      .then(res => {

        const user= res.data;
        this.setState({user});
      })
  }
CreatName=(name, Check,password)=>{
    
    let data={
        id:"0",
        name:name,
        role:Check?["user","admin"]:["user"],
        password:password,

     };
    return data
}  
SendUser=(name, Check, password)=>
{
    let postData
    if (!this.CheckNewName(name)) {
        alert("Name used")
    }
    else
    {
        postData=this.CreatName(name, Check,password);
        
    this.__submitToServer(postData);
    this.SetUser(name,postData.role);
    this.CheckNameAndPassword(name,postData.password)
    };
  
    
}
__submitToServer(data) {
    axios.post(`http://localhost:5001/user/user`, data);
  }

  render(){
  return (
    <div className="App">
      <Head
        name={this.state.Userdata.name}
      />
      <Route exact path="/" render={()=>(<Body
         Userdata={this.state.Userdata}
      />)}/>
      <Route path="/Register" render={()=>(<Register
        SendUser={this.SendUser}
      />)}/>
      <Route path="/Singin" render={()=>(<Log
        CheckNameAndPassword={this.CheckNameAndPassword}
      />)}/>
    </div>
  );}
}

export default App;
