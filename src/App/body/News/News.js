import React, { Component } from 'react'
import '../Body.css'
import Chat from './Chat/Chat'
import axios from 'axios'

class News extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            NanDis:"NanDis",
            U:props.UpDate,
          }
          
      }
    
      disClick=()=>{
        if(this.state.NanDis!="NanDis"){
            this.setState(({
                NanDis:"NanDis"
              }))
        }
        else{
            this.setState(({
                NanDis:"Chat"
              }))
        }
      }

      Delet=(id,Userdata)=>{
        if(Userdata.role.length<2){
            alert("недостаточно прав")
        }
        else{
            this.state.U() 
        axios.delete(`http://localhost:5001/post/deleteone/${id}`)
        console.log(id)
        this.state.U()
        }  
        
      }
    render(){
        const{
            pt,
            pb,
            id,
            name,
            Userdata
        }=this.props
        return (
            <div className="">
                <div className="Title">{pt+" "}Автор{" {"+name+"}"}</div>
                    
                <div className="dis">
				{pb}
                <div className="downBar">
                <button className="BC" onClick={()=>this.Delet(id,Userdata)}>
                 Delet
                </button>
                <button  className="BC" onClick={this.disClick}>
                    Coment
                </button>
                </div>
                
                </div>
                
                <Chat
                    id={id}
                    Userdata={Userdata}
                    Dis={this.state.NanDis}
                />
            </div>
          );
    }
 
}

export default News;
