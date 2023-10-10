import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Button from '@mui/material/Button';
function HlcUserformdata({username1, hlc_id, user_id,chatwith}) {

    const [userform,setuserform]=useState([])
    console.log("ho",chatwith)
    useEffect(() =>{
  
         axios.post('http://localhost:5000/getuserform',{ hlc_id: hlc_id,user_id:user_id}).then(res =>{ setuserform(res.data)}).catch((err) => console.log(err))
      
          },[])
          console.log(userform)


          const accept  = (text)=> e=> {
            e.preventDefault();
             
            axios.post('http://localhost:5000/putacceptst',{ hlc_id: hlc_id,user_id:user_id,st:text,name:username1,uname:chatwith}).then(res =>{alert("acceptance status updated")}).catch((err) => console.log(err))
          };  
          const favlist  = (text,tt)=> e=> {
            e.preventDefault();
             
            axios.post('http://localhost:5000/addfavlist',{ hlc_id: hlc_id,user_id:user_id,salary:text,user_name:tt}).then(res =>{alert("fav list  updated")}).catch((err) => console.log(err))
          };   
          

  return (
    <div>
      <Typography variant="h5" gutterBottom>
       Coustomers details
      </Typography>

      {

userform.length>=1 ?
userform.map(message=><div  >
  <div >

<div >
<h> Full Name:{message.username} </h><br></br>
      <br></br>
      <h> Phonenumber: {message.phone}</h><br></br>
      <br></br>
      <h> Email id: {message.email}</h><br></br>
      <br></br>
      <h> Adhar number: {message.adhar}</h><br></br>
      <br></br>
      <h> pan number: {message.pan}</h><br></br>
      <br></br>
      <h> Address of new house: {message.newaddress}</h><br></br>
      <br></br>
      <h> Address of present house: {message.presentaddress}</h><br></br>
      <br></br>
      <h> Occupation: {message.occupation}</h><br></br>
      <br></br>
      <h> Annual income: {message.salary}</h><br></br>
 
<br></br>
      <Button variant="outlined" style={{color:"red"}} onClick={favlist(message.salary,message.username)}>Add to fav list</Button>
<Button variant="outlined" style={{color:"red"}} onClick={accept(1)} >Accept</Button>
<Button variant="outlined" style={{color:"red"}} onClick={accept(0)}>Decline</Button>

</div>

       
  </div>
  </div>
)
:
<div>
<h1>data not available </h1>
<h>or Click on any client</h>
</div>
}
      
    </div>
  )
}

export default HlcUserformdata