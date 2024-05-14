import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const CretePost = ()=>{
    const [data,setData] = useState([])
  
    useEffect(()=>{
       fetch('http://localhost:5000/posts',{
         
       }).then(res=>res.json())
       .then(result=>{
         
           setData(result.posts)
       })
    },[])
    let total = 0;
    
    data.map(item => {
        total += (item.votes.length);
    })
    
  

 

   return(
  

    <div>
        <table style={{width:"80%",marginLeft:"10%"}}>
        <thead>
          <tr>
              <th>Candidate Name</th>
              <th>Image</th>
              <th>Vote</th>
          </tr>
        </thead>

        {
            data.map(item => (
                <tbody key={item.title}>
                <tr>
                   <td>{item.title}</td>
                
                  <td>
                  <img src={item.photo} 
                                style={{width:"50px",height:"50px"}}
                                />
                  </td>
                  <td>{item.votes.length}</td>
                </tr>
              
              </tbody>
            ))
        }
      </table>
      <p style={{fontSize:"30px"}}><b style={{marginLeft:"48%"}}>Total Vote :</b>{total}</p>
    </div>
   )
}


export default CretePost