import React, { Component } from 'react'
import './Chat.css'
import Post from './Post/Post'
import axios from 'axios'

class Chat extends Component {
  state={
    NanDis:"NanDis",
    text:"",
    comment:[],
    
  }
  disClick=()=>{
    if(this.state.NanDis!="NanDis"){
        this.setState(({
            NanDis:"NanDis"
          }))
    }
    else{
        this.setState(({
            NanDis:"NewPost"
          }))
    }
  }
  tap=(e)=>{   
    this.setState({ 
        text:e.target.value
    });
  }
  UpDate=()=>{
    axios.get(`http://localhost:5001/comment/comments`)
      .then(res => {

        const comment= res.data;
        this.setState({comment});
      })
  }
Send=(Userdata,newid)=>
{
  if(Userdata.role.length<1){
    alert("У вас недостаточно прав")
  }
  else{
    let commentData = {
      newid:newid,
      id: newid+"",
      userid:Userdata.userid,
      user: Userdata.name,
      body: this.state.text,
       
     };
   this.__submitToServer(commentData);
   this.disClick()
   this.UpDate()
  }
	
}
	__submitToServer(data) {
     axios.post(`http://localhost:5001/comment/comment`, data);
     this.UpDate()
   }
   componentDidMount() {
    axios.get(`http://localhost:5001/comment/comments`)
      .then(res => {
        const comment= res.data;
        this.setState({comment});
      })
  }
  render(){
    const{
      Dis,
      Userdata,
      id
    }=this.props
    return (
      <div className={Dis}>
        Коментарии
        {this.state.comment.map(comment=>
        
          comment.id==comment.newid?
            <Post
            id={id}
            Userdata={Userdata}
          />:console.log("")
            )}
         <div className="Comment">
         <textarea type='text' value={this.state.text} onChange={this.tap}></textarea>
         <div className="downBar">
         <button  className="BC" onClick={()=>this.Send(Userdata,id)}>
                    Add Coment
          </button>
          </div>
           </div> 
      </div>
    );
  }
  
}

export default Chat;
