import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { Rating } from '@mui/material';
import '../App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import Review from './Review';
import io from "socket.io-client";
import Chatbm from './Chatbm';
import ChatIcon from '@mui/icons-material/Chat';
const socket = io.connect("http://localhost:5000");
function Bmvarhlc() {
  const [bmdata,setbmdata]=useState([])
  const [hlcreq,setreq]=useState([])
  const [perhlc,setper]=useState([])
  const [hlcidcard,setidcard]=useState([])
  const [open1, setOpen1] = React.useState(false);
  const [openchat, setOpencgat] = React.useState(false);
  //const [cha, scha] = React.useState(false);

  const [branch,sbranch]=useState("")

  const handleClickOpen1 = () => {
    setOpen1(true);
    handleClose111(); 
  };

  const handleClose1 = () => {
    setOpen1(false);
    handleClose111(); 
  };
  const handleClickOpen111 = () => {
    setOpencgat(true);
 
  };

  const handleClose111 = () => {
    setOpencgat(false);

   
  };



  useEffect(() =>{
  
      
  axios.post('http://localhost:5000/getbmdata',{bm_id:localStorage.getItem('mid')}).then(res => {setbmdata(res.data);sbranch(res.data.branch)}).catch((err) => console.log(err))
  axios.post('http://localhost:5000/getvar_req_hlc',{branch:branch}).then(res => setreq(res.data)).catch((err) => console.log(err))

  
 
  },[])

  const MINUTE_MS = 2000;
  useEffect(() =>{
   const interval = setInterval(() => {
    axios.post('http://localhost:5000/getvar_req_hlc',{branch:branch}).then(res => setreq(res.data)).catch((err) => console.log(err))

}, MINUTE_MS);
  
 return () => clearInterval(interval);

},[])

console.log(hlcreq)


const varifyreq= (text)=> e=> {
  e.preventDefault();
  axios.post('http://localhost:5000/acceptreq',{hlcid:text}).then(res => alert("request accepted")).catch((err) => console.log(err))
console.log(":SKJBDF",text)
}
const varifyreqd= (text)=> e=> {
  e.preventDefault();
  axios.post('http://localhost:5000/acceptreqd',{hlcid:text}).then(res => alert("request accepted")).catch((err) => console.log(err))
console.log(":SKJBDF",text)
}
const onSubmitHandler= (text)=> e=> {
  e.preventDefault();

setper(text)
const ik=text.id+localStorage.getItem('mid')
console.log(ik)

  setRoom(ik)

  e.preventDefault();
    socket.emit("join_room", ik);
    setShowChat(true);
   setKey(prevKey => prevKey + 1);

//axios.post('http://localhost:5000/getfile',{hlcid:text.id}).then(res => setidcard(res.data)).catch((err) => console.log(err))

}

///////////////////////////////////
const [username, setUsername] = useState("jarvis");
const [username1, setUsername1] = useState("jarvis");
const [chatwith, setUsername11] = useState("");
const [room, setRoom] = useState("");
const [showChat, setShowChat] = useState(false);
 const [key, setKey] = useState(0);


console.log("SfsF",room)
  return (
    <div className='bm'>
      <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor:"brown"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <br></br> <br></br> <br></br>
    <div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 ">
<Box sx={{
       
       height: 560,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }}>
<div style={
  {  overflowy: "auto"}
}>
  <center>
<h>Requests as Hlcs to the branch <u>{bmdata.branch}</u> are</h>
<br></br>
<br></br>
{hlcreq.map(mm=><div>

 <div>

{mm.varreq==="1"?<div>
  <br></br>
  <ButtonGroup variant="outlined" aria-label="outlined button group">
 <Button variant="outlined"  style={{width:180,borderRadius:9}} onClick={onSubmitHandler(mm)} >  <div >
 
<h5 style={{color:"black"} }>{mm.username}</h5 >

  </div>
  </Button>  

  </ButtonGroup>
 </div>
  :<h></h>
}

  </div>

  
  </div>)}


</center>
</div>
</Box>
    </div>
<div class="col-sm-5" >
<Box sx={{
       
       height: 585,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }}>

<center>
  <h4>The full Details of the HLC</h4>
</center>
<div style={{margin:20}}>

  <h5>Full name:  <h>{perhlc.username}</h></h5>
  <br></br>
  <h5>Phone:  <h>{perhlc.phone}</h></h5>
  <br></br>
  <h5>Email id:  <h>{perhlc.email}</h></h5>
  <br></br>
  <h5>Bank:  <h>{perhlc.bank}</h></h5>
  <br></br>
  <h5>City:  <h>{perhlc.city}</h></h5>
  <br></br>
  <h5>Can do loans in :  <h>{perhlc.cando}</h></h5>
  <br></br>
  <h5>Rating:  <h>{perhlc.rating}</h></h5>
  <br></br>
  <h5>Expreiance:  <h>{perhlc.exp}</h></h5>
  <br></br>
<center>
  
<ButtonGroup variant="outlined" aria-label="outlined button group">
<abbr title="Varify"><IconButton  style={{borderRadius:9}}><TaskAltIcon sx={{color:"green"}} onClick={varifyreq(perhlc.id)} /></IconButton></abbr>
<abbr title="Decline" > <IconButton  style={{borderRadius:9}}> <CancelIcon sx={{color:"red"}} onClick={varifyreqd(perhlc.id)}/></IconButton></abbr>
  </ButtonGroup>
<br></br>
  <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button  variant="outlined"  style={{width:200,borderRadius:9}} onClick={handleClickOpen1} >See the Hlc id</Button>
  <Button  variant="outlined"  style={{width:200,borderRadius:9}} onClick={handleClose1} >See the Review</Button>
  <abbr title="Chat"><IconButton  style={{borderRadius:9}}><ChatIcon sx={{color:"blue",fontSize:30}} onClick={handleClickOpen111} /></IconButton></abbr>
  </ButtonGroup>
  </center>
</div>

     </Box>

</div>

{
openchat?

<div class="col">
<Box sx={{
       
    width:200,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
         
        
       },
     }}>
      <div>
 <Chatbm socket={socket} username={username} room={room}  key={key} /> 
</div>

</Box>
</div> 
:
<div class="col-sm-4 ">
{
 open1?<div>

{hlcidcard.map(mm=><embed src={mm.image} type="application/pdf" width="100%" height="560px"/>)}
{/* <embed src={hlcidcard.image} type="application/pdf" width="50%" height="600px" /> */}
 </div>:
 
 <div class="col">
<div class="col" style={{
 scrollbehaviour: "smooth",


}}>

<Box sx={{
       
       height: 550,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
  border:'red',
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }}>


      <div  style={{
        // Set the width of the div
        height: '550px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
                   

 {perhlc.id?<Review perhlc={perhlc}/>:<h><center><h>please select one </h></center></h>} 

</div>


</Box>
</div>

{/* <div class="col">
<Box sx={{
       
       height: 330,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
         
        
       },
     }}>
      <div>
 <Chatbm socket={socket} username={username} room={room}  key={key} /> 
</div>

</Box>
</div> */}
 </div>

}



</div>
 

}
  </div>
</div>


    </div>
  )
}

export default Bmvarhlc