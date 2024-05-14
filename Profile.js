import React,{useEffect} from 'react';
import { useHistory} from 'react-router-dom'
const Profile = () => {
    const history = useHistory();

    const userInfor =JSON.parse(localStorage.getItem("user"));
  
      
      
   
    return (
        <div className="card" style={{width:"30%"}}>
            <div style={{marginLeft:"20px"}}>
                {
                    userInfor !== null ?
                    <div>
                    <p style={{marginLeft:"40px"}}><b>{userInfor.name.split(" ")[0]}</b></p>
                    <img src={userInfor.pic} style={{height:"140px",width:"140px",borderRadius:"50%"}} />
                    <p><b>Name : </b>{userInfor.name}</p>
                    <p><b>Branch : </b>{userInfor.branch}</p>
                    <p><b>Mobile.No : </b>{userInfor.mobile}</p>
                    <p><b>City : </b>{userInfor.city}</p>
                    </div>
                    : ""
                }
          
            </div>
        </div>
    );
};

export default Profile;