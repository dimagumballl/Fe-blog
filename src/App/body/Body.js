import React, { Component } from 'react'
import './Body.css'
import News from './News/News'
import axios from 'axios'
import ReactDOM from 'react-dom'




class Body extends Component {
  state={
    NanDis:"NanDis",
    text:"",
    title:"",
    post:[],
    id:[],
    
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
  tapt=(e)=>{      
    this.setState({ 
      title:e.target.value
    });
  }
  IdCreator(){
    this.UpDate()
    let c = true
    let t = 0
    
      while(c==true){
        if(this.state.post.length==0)
          break
        c=false 
        for(let i = 0;i<this.state.post.length;i++){
          
            if(this.state.post[i].id==t)
              c=true
              console.log(t)  
        }
        if(c==false)
          break
        this.UpDate() 
        t++
      }
      c = true
      this.UpDate()
      console.log(t) 
    return t
  }
  UpDate=()=>{
    axios.get(`http://localhost:5001/post/posts`)
      .then(res => {

        const post= res.data;
        this.setState({post});
      })
  }
  Delet=()=>{
    axios.delete(`http://localhost:5001/post/delete`);
    this.UpDate()
    axios.delete(`http://localhost:5001/user/delete`);
    
  }
Send=(Userdata)=>
{
  if(Userdata.role.length<2){
    alert("У вас недостаточно прав")
  }
  else{
    let postData = {
		  id: this.IdCreator(),
       title: this.state.title,
       body: this.state.text,
       user: Userdata.name,
     };
   this.__submitToServer(postData);
   this.disClick()
   this.UpDate()
  }
	
}
	__submitToServer(data) {
     axios.post(`http://localhost:5001/post/post`, data);
     this.UpDate()
   }
   componentDidMount() {
    axios.get(`http://localhost:5001/post/posts`)
      .then(res => {
        const post= res.data;
        this.setState({post});
      })
  }
  render(){
    const{
      Userdata
    }=this.props
    return (
      <div className="Body">
        <button className="register"  onClick={this.disClick}>
          Новый пост
        </button>
        <button className="register" onClick={()=>this.Delet()}>
          Почистить
        </button>
          <div className={this.state.NanDis}>
            <div className="NewTitle">
              Название
              <textarea type='text' value={this.state.title} onChange={this.tapt}></textarea>
            </div>
            <button className="AddB" onClick={()=>this.Send(Userdata)}>
              Готово
            </button>
            <div className="NewText">
            <textarea type='text' value={this.state.text} onChange={this.tap}></textarea>
            </div>
          </div>
          {this.state.post.map(post=>
            <News
            Userdata={Userdata}
            name={post.user}
            id={post._id}
            UpDate={this.UpDate}
            pt={post.title}
            pb={post.body}
          />
            )}
          
      </div>
    );
  }
  
}



export default Body;
