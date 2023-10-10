import React,{useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import bas from '../emi.jpg';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import '../App.css'

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green } from '@mui/material/colors';
import CancelIcon from '@mui/icons-material/Cancel';
import Chatbm from './Chatbm';

const socket = io.connect("http://localhost:5000");

function Hlc() {

  const [usernam, setUsername] = useState(localStorage.getItem('user_name').replace('@gmail.com',''));
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [hlcid, sethlcid] = useState("");
  const [useid, setuserid] = useState(localStorage.getItem('uid'));




  const onsub = (text)=> e=> {
    sethlcid(text)
    const ik=text+useid;
    setRoom(ik)
    console.log(ik)
   console.log("hi")
   console.log(text)
    e.preventDefault();
    socket.emit("join_room", ik);
    setShowChat(true);
   
  }

/////////////////////////


const [rows, setRows] =useState([])
useEffect(() =>{
    axios.get('http://localhost:5000/hlc',{
       
    }).then(res => setRows(res.data)).catch((err) => console.log(err))



},[])
console.log(rows)
/////////////////////////////
const columns = React.useMemo(
  () => [
    { field: 'username', type: 'string' },
    { field: 'city', type: 'string' },
    { field: 'bank', type: 'string', width: 130 },
    { field: 'phone', type: 'string', width: 180 },
    { field: 'email', type: 'string', width: 120 },
    {
      field: 'cando',
      type: 'string',
      width: 200,
     
    },
    {
     
      field: 'rating',
      type: 'actions11',
      width:150,
      renderCell: (params) => (    <Rating name="disabled" value={params.row.rating} disabled />),
     
    },
    {
     
      field: 'var',
      type: 'actions11',
      width:90,
      renderCell: (params) => (  params.row.var==="0"?  < CancelIcon sx={{color:"red"}}/>:<TaskAltIcon sx={{color:"green",fontSize:30}}  />),
     
    },
    {
      field: 'exp',
      type: 'number',
      width: 100,
     
    },
    {
      field: 'actions1',
      type: 'actions1',
      width: 150,
      renderCell: (params) => ( <Button variant="outlined"  size="small" onClick={onsub(params.id)} > Full profile</Button>),
      getActions: (params) => [
       
        
      
       
      ],
    },
  ],
  [],
);

  return (
    <div className="imag" >

      {!showChat ? (
        <div >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            Hlcs
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

          <Box sx={{
       
       height: 500,
      //  margin: 4.5,
      //  marginLeft: 2,
      
       backgroundColor: 'white',
       opacity:0.55,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.89,
        
       },
     }}>
   <DataGrid columns={columns} rows={rows}  components={{ Toolbar: GridToolbar }}/>
   </Box>
        </div>
      ) : (
          <Chatbm socket={socket} username={usernam} room={room} rows={rows} hlcid={hlcid}/>
      )}
    </div>
  );
}

export default Hlc;