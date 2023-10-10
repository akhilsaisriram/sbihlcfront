import React, { useState,useEffect } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import ButtonGroup from '@mui/material/ButtonGroup';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';

import Container from 'react-bootstrap/Container';

import Review from './Review';
import Chatbm from './Chatbm';
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const socket1 = io.connect("http://localhost:5000");
const Bmvarlos = () => {
const [losdata,setloc]=useState([])
const [ifsc,setifsc]=useState(localStorage.getItem('ifsc'))
const [users,setuser]=useState([])
const [peruser,setper]=useState([])
const [peruserlos,setperid]=useState([])
const [perhlc,setperhlc]=useState([])
const [hlcidcard,setcard]=useState([])
const [userpdfk,setupdfk]=useState([])
const [hlcid,sethid]=useState("0")
const [userid,setuid]=useState("0")


const [username, setUsername] = useState("jarvis");
const [username1, setUsername1] = useState("jarvis");
const [chatwith, setUsername11] = useState("");
const [room, setRoom] = useState("");
const [room1, setRoom1] = useState("");
const [showChat, setShowChat] = useState(false);
const [showChat1, setShowChat1] = useState(false);
 const [key, setKey] = useState(0);
 const [key1, setKey1] = useState(0);

//////////////////////
const [open1, setOpen1] = React.useState(false);
  const [openchat, setOpencgat] = React.useState(false);
  //const [cha, scha] = React.useState(false);
  const [openchatcos, setOpencgatcos] = React.useState(false);


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
    joinRoom1();
  };

  const handleClose111 = () => {
    setOpencgat(false);

   
  };

  const handleClickOpen111c = () => {
    setOpencgatcos(true);
 joinRoom();
  };

  const handleClose111c = () => {
    setOpencgatcos(false);

   
  };
  const [pdfl,setpdfl]=useState("0")
const [pdfk,setpdfk]=useState("0")
  const handleSelect = (eventKey) =>{


    setpdfk(eventKey)
    handleClose111()
  
  //alert(`selected ${eventKey}`)
  };
  const handleSelect1 = (eventKey) =>{


    setpdfl(eventKey)
    handleClose111()
  
  //alert(`selected ${eventKey}`)
  };
//////////////////////////////
const [c,sc]=useState(0)
 
const [amtdone,setsandone]=useState(0)

const MINUTE_MS = 1000;
useEffect(() =>{
 const interval = setInterval(() => {
  
      
    axios.post('http://localhost:5000/bmlosvar',{ifsc:ifsc}).then(res => setloc(res.data)).catch((err) => console.log(err))
    axios.post('http://localhost:5000/sanamthlc',{hlc_id:localStorage.getItem('hlcid')}).then(res => setsandone(res.data)).catch((err) => console.log(err))


  }, MINUTE_MS);
  
  return () => clearInterval(interval);
 
 },[])
  //console.log(losdata)
  const uniqueItems = [...new Set(losdata.map(item => item.hlcname))].map(hlcname => {
    return losdata.find(item => item.hlcname === hlcname);
  });
//console.log("fgds",uniqueItems)



const onSubmitHandler= (text)=> e=> {
  e.preventDefault();
console.log(text.hlc_id)
sethid(text.hlc_id)
axios.post('http://localhost:5000/bmlosvaruser',{hlc_id:text.hlc_id}).then(res => setuser(res.data)).catch((err) => console.log(err))
axios.post('http://localhost:5000/hlcdata',{id:text.hlc_id}).then(res => setperhlc(res.data)).catch((err) => console.log(err))


axios.post('http://localhost:5000/getfile',{hlcid:text.hlc_id}).then(res => setcard(res.data)).catch((err) => console.log(err))

///////////////////////
}

const onSubmitHandler1= (text)=> e=> {
  e.preventDefault();
//console.log(text.user_id)
setperid(text)
setuid(text.user_id)
axios.post('http://localhost:5000/getuserform',{user_id:text.user_id}).then(res => setper(res.data)).catch((err) => console.log(err))

axios.post('http://localhost:5000/getuserfiles',{user_id:text.user_id,hlcid:hlcid}).then(res => setupdfk(res.data)).catch((err) => console.log(err))
console.log(userpdfk)

}

const varify= (tt)=> e=> {

  e.preventDefault();
console.log(tt)


 axios.post('http://localhost:5000/losvarification',{userid:userid,hlcid:hlcid,var:"1",varfied:"1"}).then(res => {alert("LOS is varified");sc(c+1)}).catch((err) => console.log(err))
 
//  axios.post('http://localhost:5000/bmlosvaruser',{hlc_id:hlcid}).then(res => setuser(res.data)).catch((err) => console.log(err))
//  axios.post('http://localhost:5000/hlcdata',{id:hlcid}).then(res => setperhlc(res.data)).catch((err) => console.log(err))


//  axios.post('http://localhost:5000/getfile',{hlcid:hlcid}).then(res => setcard(res.data)).catch((err) => console.log(err))
 

}

const reject= (tt)=> e=> {
  e.preventDefault();
console.log(tt)
axios.post('http://localhost:5000/losvarification',{userid:userid,hlcid:hlcid,var:"1",varfied:"0"}).then(res => {alert("LOS is rejected");sc(c+1)}).catch((err) => console.log(err))


}

//console.log("Sdf",peruser)

const joinRoom = () => {
  if(userid==="0"){alert("please select the coustomer")}else{ setShowChat(true)}

const ik=userid+localStorage.getItem('mid')
setRoom(ik)
    socket.emit("join_room", ik)
   
    setKey(prevKey => prevKey + 1)
   
};
const joinRoom1 = () => {
  if(hlcid==="0"){alert("please select the coustomer")}else{ setShowChat1(true)}

const ik=hlcid+localStorage.getItem('mid')
setRoom1(ik)
    socket1.emit("join_room", ik)
   
    setKey1(prevKey => prevKey + 1)
   
};
  return (
    <div  className='locvar'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"brown"}}>
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
            LOS varification
          </Typography>
          <Button color="inherit">Back</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div class="container-fluid">
      <br></br>
  <div class="row">
    <div class="col-sm-3">

<Box sx={{
       
       height: 535,
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
        <center>The requests on sent to this ifsc code: {ifsc} branch to varify los`s</center>
        <br></br>
        <center>{
          uniqueItems.length>=0?<div> {uniqueItems.map(mm=><div>
           <div>
              <br></br>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
             <Button variant="outlined"  style={{width:180,borderRadius:9}} onClick={onSubmitHandler(mm)}  >  <div >
             
            <h5 style={{color:"black"} }>{mm.hlcname}</h5 >
            
              </div>
              </Button>  
            
              </ButtonGroup>
             </div>
             
            </div>)}</div>
            :<div>
          <div>
              <br></br>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
             <Button variant="outlined"  style={{width:180,borderRadius:9}} onClick={onSubmitHandler(losdata)}  >  <div >
             
            <h5 style={{color:"black"} }>{losdata.hlcname}</h5 >
            
              </div>
              </Button>  
            
              </ButtonGroup>
             </div>
          
            </div>
          }
</center>
        </div>
        </Box>
      
    </div>

<div class="col-sm-4 ">
    <div class="col-sm-4 " >

<Box sx={{
       width:400,
       height: 150,
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
        width:'390px',
        // Set the width of the div
        height: '150px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
         <center>
          The hlcs with their LOS`s id`s
          <hr></hr>
          {
          users.length>=0?<div> {users.map(mm=><div>
           <div>
              <br></br>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
             <Button variant="outlined" size="small" style={{width:180,borderRadius:9}} onClick={onSubmitHandler1(mm)}  >  <div >
             
            <h5 style={{color:"black"} }>{mm.username} </h5 ><small>los :{mm.los}</small>
            
              </div>
              </Button>  
            
              </ButtonGroup>
             </div>
             
            </div>)}</div>
            :<div>
          <div>
              <br></br>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
             <Button variant="outlined" size="small" style={{width:180,borderRadius:9}} onClick={onSubmitHandler1(users)}  >  <div >
             
            <h5 style={{color:"black"} }>{users.username}</h5 >
            
              </div>
              </Button>  
            
              </ButtonGroup>
             </div>
          
            </div>
          }
         </center>
        </div>
</Box>
</div>

<div class="col-sm-4" style={{margin:5}}>
<Box sx={{
         width:400,
       height: 383,
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
<div style={{marginLeft:5}}>
  <center>The HLC details {perhlc.var==="0"?<h style={{color:"red"}}>Not varified <CancelIcon style={{color:"red"}} /> </h>:<h style={{color:"green"}}>varified <TaskAltIcon style={{color:"green"}}/></h>}</center>
<h><b>Full name: </b> {perhlc.username}</h>
<br></br>
<h><b>Gmail: </b> {perhlc.email}</h>
<br></br>
<h><b>ID number: </b> {perhlc.idcard}</h>
<br></br>
<h><b>phone number: </b> {perhlc.phone}</h>
<br></br>
<h><b>Bank: </b> {perhlc.bank}</h>
<br></br>
<h><b>City: </b> {perhlc.city}</h>
<br></br>
<h><b>Can do in: </b> {perhlc.cando}</h>
<br></br>
<h><b>Expreiance: </b> {perhlc.exp}</h>
<center>
<ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button  variant="outlined"  style={{width:120,borderRadius:9}} onClick={handleClickOpen1} >see Hlc id</Button>
  <Button  variant="outlined"  style={{width:120,borderRadius:9}} onClick={handleClose1} >see Review</Button>
  <abbr title="Chat"><IconButton  style={{borderRadius:9}}><ChatIcon sx={{color:"blue",fontSize:30}} onClick={handleClickOpen111} /></IconButton></abbr>
  </ButtonGroup>
  </center>
<hr></hr>
</div>

     </Box>
</div>

    </div>
    <div class="col-sm-4">
    <div class="col-sm-4">
    <Box sx={{
         width:400,
       height: 393,
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
     }}><div style={{marginLeft:5,margin:5}}>
      <center>The Coustomer detals 
      </center>
      {peruser.map(mm=><div>
      <h><b>FullName: </b>{mm.username}</h><br></br>
      <h><b>Gmail: </b>{mm.email}</h><br></br>
      <h><b>Phone number: </b>{mm.phone}</h><br></br>
      <h><b>Adhar number: </b>{mm.adhar}</h><br></br>
      <h><b>PAN number: </b>{mm.pan}</h><br></br>
      <h><b>occupation: </b>{mm.occupation}</h><br></br>
      <h><b>Present Address: </b>{mm.presentaddress}</h><br></br>
      <h><b>New Address: </b>{mm.newaddress}</h><br></br>
      <h><b>Salary: </b>{mm.salary}</h><br></br>


      <abbr title="Chat"><IconButton  style={{borderRadius:9}}><ChatIcon sx={{color:"blue",fontSize:30}} onClick={handleClickOpen111c} /></IconButton></abbr>
<Button onClick={handleClose111c} >kyc documents</Button>
      </div>
   ) }

   <hr></hr>
   <center>
   <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button  variant="outlined"  style={{width:200,borderRadius:9}}  onClick={varify(555)}>varify the los<TaskAltIcon style={{color:"green"}}/></Button>
  <Button  variant="outlined"  style={{width:195,borderRadius:9}}  onClick={reject(555)}>Reject the request <CancelIcon style={{color:"red"}} /> </Button>
  </ButtonGroup>
   </center>
      </div></Box>
    </div>

    <div class="col-sm-4" style={{margin:5}}>
    <Box sx={{
         width:400,
       height: 133,
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
      <center>LOS datails</center>
      <div style={{margin:10}}>
<h><b>LOS number:</b> {peruserlos.los}</h>
<br></br>
<h><b>Sanctioned amount:</b> {peruserlos.sacamt}</h>
<br></br>
<h><b>Coustomer ac number:</b> {peruserlos.acno}</h>
<br></br>
<h><b>Sanctioned Branch ifsc code:</b> {peruserlos.ifsc}</h>
      </div>
     </Box>


    </div>


    </div>
    <div class="col-sm-1" >
    <div  class="col-sm-1">
    <Box sx={{
        width:130,
        height: 230,
       //  margin: 4.5,
         marginLeft: -5,
       borderRadius:5,
   border:'red',
        backgroundColor: 'white',
        opacity:0.55,
        '&:hover': {
          backgroundColor: 'white',
          opacity:0.89,
         
        },
      }}>
       <div >
        <center><h>this year target</h><br></br>
    <b><h>50,00,00,000</h></b> 
    <hr></hr>

    <h>Your reach to target </h>
    <b><h>30,00,00,000</h></b> 
    <hr></hr>
    <h>Remainging </h>
    <b><h>20,00,00,000</h></b> 
        </center>
       </div>
      </Box>
    </div>
    <div  class="col-sm-1" style={{margin:5}}>
    <Box sx={{
        width:130,
        height: 130,
       //  margin: 4.5,
         marginLeft: -5,
       borderRadius:5,
   border:'red',
        backgroundColor: 'white',
        opacity:0.55,
        '&:hover': {
          backgroundColor: 'white',
          opacity:0.89,
         
        },
      }}>
       <div >
        <center><h>previous year Amount collected sourced</h><br></br>
    <b><h>50,00,00,000</h></b> 
    <hr></hr>

        </center>
       </div>
      </Box>
    </div>
    <div  class="col-sm-1" style={{margin:5}}>
    <Box sx={{
        width:130,
        height: 130,
       //  margin: 4.5,
         marginLeft: -5,
       borderRadius:5,
   border:'red',
        backgroundColor: 'white',
        opacity:0.55,
        '&:hover': {
          backgroundColor: 'white',
          opacity:0.89,
         
        },
      }}>
       <div >
        <center><h>Monthly target</h><br></br>
    <b><h>50,00,000 rs</h></b> <br></br>
    <h>Amount done</h>
    <br></br><b><h>{amtdone} rs</h></b>
    <hr></hr>

        </center>
       </div>
      </Box>
    </div>
    </div>
    </div>
   
    </div>


    <div class="container-fluid">
    <div class="row">
    <div class="col-sm-4">
    <Box sx={{
        
       height: 630,
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


{
openchat?<div  style={{marginLeft:20} }><h>Chat with hlc</h>{showChat1? <Chatbm socket={socket1} username={username} room={room1}  key={key1} />:<h>  please select hlc to chat </h> }</div>:
     <div>
    <center>The HLC`s reviews and id card</center>
   
      {perhlc.length>=0?<div>
        <br></br>
  
        <center><h>please select the hlc</h></center>

</div>:<div>{
  open1?<div>{hlcidcard.map(mm=><embed src={mm.image} type="application/pdf" width="100%" height="560px"/>)}</div>:
  <div  style={{
    // Set the width of the div
    height: '600px', // Set the height of the div
    overflow: 'auto', // Enable scrolling when the content exceeds the div size
    // Add a border for visual clarity
   // Add padding to the content to prevent it from touching the edges
    borderRadius:10
  }}>
               

{perhlc.id?<Review perhlc={perhlc}/>:<h><center><h>please select one </h></center></h>} 

</div>
}</div>

}
     </div>
    } 
     </Box>
    </div>
    <div class="col-sm-4 " >
    <Box sx={{
       
       height: 632,
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


  {openchatcos?  <h><div  style={{marginLeft:20} }><h>Chat with coustomer</h>{showChat? <Chatbm socket={socket} username={username} room={room}  key={key} />:<h>please select coustomer to chat </h> }</div>
</h>:
     <div>
     <center>The KYC of coustomer and income documents</center>
     <center>  <div>     <Nav variant="pills"  onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" >pdf1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">pdf 2</Nav.Link>
      </Nav.Item>
      <Nav.Link eventKey="3" >pdf3</Nav.Link>
    
      <Nav.Item>
        <Nav.Link eventKey="4">pdf 4</Nav.Link>
      </Nav.Item>
     

    </Nav> 
</div></center> 
<br></br>
<center>{pdfk==="0"?<h>please select any pdf to view</h>:<h></h>}</center> 
{
   pdfk==="1"? <center><h> {userpdfk.map(mm=><embed src={mm.pdf1} type="application/pdf" width="100%" height="530px"/>)}</h></center>:<h></h>
}
{
   pdfk==="2"? <center><h> {userpdfk.map(mm=><embed src={mm.pdf2} type="application/pdf" width="100%" height="530px"/>)}</h></center>:<h></h>
}

    </div> 

}
 </Box>
    </div>
    <div class="col-sm-4">
    <Box sx={{
       
       height: 630,
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
     <div>
      <center>The link legal documents of coustomer</center>
      <Nav variant="pills"  onSelect={handleSelect1}>
      <Nav.Item>
        <Nav.Link eventKey="1" >pdf1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">pdf 2</Nav.Link>
      </Nav.Item>
      <Nav.Link eventKey="3" >pdf3</Nav.Link>
    
      <Nav.Item>
        <Nav.Link eventKey="4">pdf 4</Nav.Link>
      </Nav.Item>
      <Nav.Link eventKey="5" >pdf5</Nav.Link>

    </Nav> 
    {
   pdfl==="1"? <center><h> {userpdfk.map(mm=><embed src={mm.pdf1} type="application/pdf" width="100%" height="530px"/>)}</h></center>:<h></h>
}
{
   pdfl==="2"? <center><h> {userpdfk.map(mm=><embed src={mm.pdf2} type="application/pdf" width="100%" height="530px"/>)}</h></center>:<h></h>
}
     </div>


     </Box>
    </div>
    </div>
    </div>



    </div>


 
  )
}

export default Bmvarlos