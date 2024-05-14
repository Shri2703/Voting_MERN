import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import Chart from "./Chart";
import Profile from "./Profile";

const Home  = ()=>{
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('http://localhost:5000/allpost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
         
           setData(result.posts)
       })
    },[])

    const votePlayer = (id)=>{
          fetch('http://localhost:5000/vote',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
                   //   console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }
   
    let isVote ; 
    if(JSON.parse(localStorage.getItem("user")) !== null){
        isVote = JSON.parse(localStorage.getItem("user"))._id;
    }
     
    
    const userIdExist = (data.map(item => item.votes.filter(item => item )));
    let newVlaue = false;
    for(let key of userIdExist) {
      if(key.length > 0 ){
         
         for(let key2 of key){
             if(key2 == isVote){
                newVlaue = true ;
             }
        }
      }
    }
  
   return (
       <div className="home">
           <div style={{width:"100%"}} className="card">
           <div style={{width:"40%",float:"right",marginLeft:"20px"}}>
            <Profile />
           </div>
           <div style={{width:"60%",float:"none"}}>
           {
            
               data.map(item=>{
                   return(
                    
                      <div className="col s14"key={item._id} style={{width:"40%",float:"left"}} >  
                       <div className="card "  >
                          <h6><b style={{marginLeft:"90px"}}>{item.title}</b></h6>
                        <div className="card-image" style={{marginLeft:"20%"}}>
                                <img src={item.photo} style={{height:"200px",width:"200px"}} 
                                // style={{width:"120px",height:"120px"}}
                                />
                        </div>
                            <div className="card-content">
                          
                            {!item.votes.includes(state._id ) && newVlaue == false
                            ? 
                           
                            <button  className="waves-effect waves-light btn"  style={{marginLeft:"50px"}}
                            onClick={()=>{votePlayer(item._id)}}>Vote</button>
                            : ""
                            }
                            {
                                newVlaue ?
                                 <button className="btn disabled" style={{marginLeft:"47px",background:"red"}}>
                                     Already Voted</button> : ""
                            }
                           
                                <h6> <span style={{fontSize:"40px",}}>{item.votes.length}</span> Vote</h6>
                            
                             
                             
                                </div>    
                            </div>
                            </div>
                   
                   )
               })
           }
         </div> 
 
        </div>
       </div>
   )
}


export default Home