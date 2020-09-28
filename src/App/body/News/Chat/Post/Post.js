import React, { Component } from 'react'
import "./Post.css"
import axios from 'axios'


class Post extends Component {
  Delet=(id,Userdata)=>{
    if(Userdata.role.length<2){
        alert("недостаточно прав")
    }
    else{
        this.state.U() 
    axios.delete(`http://localhost:5001/comment/deleteone/${id}`)
    console.log(id)
    this.state.U()
    }  
    
  }
  render(){
    return (
      <div className="Post">
          <div className="User">
              Name
          </div>
          <div className="Text">
          Описание
          <div className="downBar">
          <button className="BC">
              Delet
          </button>
          </div>
          
          </div>
          
      </div>
    );
  }
  
}

export default Post;
