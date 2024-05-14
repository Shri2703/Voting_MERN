import React,{useState,useEffect} from 'react'



const Posts  = ()=>{
    const [data,setData] = useState([])
  
    useEffect(()=>{
       fetch('http://localhost:5000/posts',{
         
       }).then(res=>res.json())
       .then(result=>{
         
           setData(result.posts)
       })
    },[])


   
   const  renderData = data.map((item) => (
        <div style={{width:"187px",height:"180px",border:"1px solid grey",float:"left",margin:"5px"}}>
        <div className="row" key={item.title} style={{float:"left",}}>
            <div className="col-6">
                 <img src={item.photo} style={{height:"100px",width:"120px",marginLeft:"31px",borderRadius:"10%"}} />
                 <p><b style={{marginLeft:"38px"}}>{item.title}</b></p>
                 <p><b style={{marginLeft:"38px"}}>{item.votes.length > 1 ?  item.votes.length  + " votes" :  + item.votes.length + " vote" }</b></p>
            </div>
        </div>
        </div>
    ))
  
   return (
       <div className="home">
           <div  style={{width:"400px",height:"400px",border:"1px solid red"}}>
           {renderData}
           </div>
       </div>   
   )   
}


export default Posts