import React,{useContext,useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import io from "socket.io-client";
import Chathlcuser from './Chathlcuser';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CWidgetStatsE } from '@coreui/react';
import { CCol } from '@coreui/react';

import {CChartBar} from '@coreui/react-chartjs'
const socket = io.connect("http://localhost:5000");
const Bmchat = () => {
    const [bmdata,setbmdata]=useState([])
    const [perbm,setpbm]=useState([])
    const [hlcid,sethid]=useState(localStorage.getItem('hlcid'))
    const [los,setlos]=useState([])
    const [ifsc,setifsc]=useState("")
    useEffect(()=>{
        axios.post('http://localhost:5000/allbmdata').then(res => setbmdata(res.data)).catch((err) => console.log(err))
        axios.post('http://localhost:5000/hlcbmlos',{hlc_id:hlcid}).then(res => setlos(res.data)).catch((err) => console.log(err))

    },[])
    console.log(los)
    console.log(ifsc)

    const [username, setUsername] = useState("jarvis");
    const [username1, setUsername1] = useState("jarvis");
    const [chatwith, setUsername11] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const [key, setKey] = useState(0);
    const joinRoom  = (text)=> e=> {
      const ik=hlcid+text.bm_id;
      setUsername(text.username)
      setpbm(text)
      setifsc(text.ifsc)
      setRoom(ik)
   
      e.preventDefault();
        socket.emit("join_room", ik);
        setShowChat(true);
        setKey(prevKey => prevKey + 1);
    };

  return (
    <div class='bmhlccaht'>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'brown' }}>
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
            Chatroom
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <div  class="container-fluid">
        <br></br>
    <div class="row ">
        <div class="col-sm-3 " style={{
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
        height: '320px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}> 
      <center>
        <h>Branch managers</h>
<br></br><br></br>
{
    bmdata.map(mm=><div>
        <Button variant="outlined"  style={{width:180,borderRadius:9}} onClick={joinRoom(mm)}>{mm.username}</Button><br></br><br></br>
    </div>)
}
      </center>
      </div>
      </Box>
        </div>
        <div class="col-sm-4" >
        <Box sx={{
       
       height: 550,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
  border:'red',
       backgroundColor: 'white',
       opacity:0.65,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }} >
        <center>
<Chathlcuser socket={socket} username={username} room={room}  key={key} /> </center>
     </Box>
        </div>
<div class="col-sm-3 "  >
<Box sx={{
       
       height: 550,
      //  margin: 4.5,
        //marginLeft: 10,
      borderRadius:5,
  border:'red',
       backgroundColor: 'white',
       opacity:0.65,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }}>
  <div>
    <center>
        Bm data<br></br>
        <b><h>IFSC code:{perbm.ifsc}</h></b><br></br>
        <b><h>Experiance:{perbm.exp}</h></b><br></br>
         
    </center>
    <h>Full name: {perbm.username}</h><br></br>
    <h>Gmail: {perbm.email}</h><br></br>

    <h>Phone number: {perbm.phone}</h><br></br>

    <h>Bank name: {perbm.bank}</h><br></br>
    <h>City name: {perbm.city}</h><br></br>
    <h>Branch name: {perbm.branch}</h><br></br>

<b><hr></hr></b><center><b>The los details</b></center>
<div  style={{
    // Set the width of the div
    height: '300px', // Set the height of the div
    overflow: 'auto', // Enable scrolling when the content exceeds the div size
    // Add a border for visual clarity
   // Add padding to the content to prevent it from touching the edges
    borderRadius:10
  }}>
    <center>
  {
        los.map(mm=>
          <div>
{mm.ifsc===ifsc?<div>
           <b><h>Your request to varify los is {mm.varfied==="1" ? <h>{ mm.var==="1"? <h style={{color:"green"}}> varifed</h>:<h></h>}</h>:<h> {mm.var==="1"? <h style={{color:"red"}}> rejected</h>:<h style={{color:"red"}}> still pending</h>}</h>}</h></b> 
           <br></br>
            <h>The LOS number :{mm.los}</h>
            <br></br>
            <h>Coustomer name :{mm.username}</h><br></br>
            <h>Sanctioned Amount: {mm.sacamt}</h><hr></hr>
            </div>:<h>no data found</h>
}
          </div>
          )
       }</center>
</div>
  </div>
     </Box>
</div>
<div class="col-sm-2  ">
<CCol xs={10}>
    <CWidgetStatsE
      className="mb-3"
      chart={
        <CChartBar
          className="mx-auto"
          style={{ height: '40px', width: '100px' }}
          data={{
            labels: ["January","February","March","April","May","June","July",
            "August","September","October","November","December"],
            datasets: [
              {
                backgroundColor: '#321fdb',
                borderColor: 'transparent',
                borderWidth: 1,
                data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }}
        />
      }
      title="Total money sactioned by this Branch this year"
      value="8000000 rs"
    />
  </CCol>
</div>

    </div>
    </div>

    </div>
  )
}

export default Bmchat