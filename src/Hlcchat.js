import "./App.css";
import io from "socket.io-client";
import React,{useEffect,useState} from 'react'
import Hlcchatroom from "./Hlcchatroom";
import HlcUserformdata from "./HlcUserformdata";
import axios from "axios";
import img from './hc.jpg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAlert from '@mui/material/Alert';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
const socket = io.connect("http://localhost:5000");

function Hlcchat() {

  const [key, setKey] = useState(0);
  const [hlcid,sethlcid]=useState(localStorage.getItem('hlcid'))
  const [user_id,setuser]=useState("")
  const [useer_name,setusername]=useState("")
  const [hlcchatlist,sethlcchatlist]=useState([])
  
  useEffect(() =>{
   
  axios.post('http://localhost:5000/hlcchatlist',{hlcid:hlcid}).then(res => sethlcchatlist(res.data)).catch((err) => console.log(err))
  
   
  },[])

//console.log(hlcchatlist)

const background = {    
  backgroundImage: `url(${img})`,
  height: "662px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const uniqueItems = hlcchatlist.map(me =>[...new Set((me.messages).map(item => item.author))].map(author => {
  return (me.messages).find(item => item.author === author);
})); 
console.log(uniqueItems)
  ////////////////////////////////////

  const [username, setUsername] = useState("jarvis");
  const [username1, setUsername1] = useState("jarvis");
  const [chatwith, setUsername11] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom  = (text,tt)=> e=> {
    const ik=hlcid+text;
    setUsername11(tt)
    setuser(text)
    setusername(tt)
    setRoom(ik)
    console.log(tt,text);
    e.preventDefault();
      socket.emit("join_room", ik);
      setShowChat(true);
      setKey(prevKey => prevKey + 1);
  };

  return (
    <div style={background}>
    

<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Accepted
        </Alert>
      </Snackbar>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }} >
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
            chat
          </Typography>
          <Button color="inherit"><Link to={`/Userhlc`}>Back</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    <div class="row" style={{margin:2}} >
    <div class="col-sm-3 text-black">
    <br></br>
    <Card style={{ height: 520 }}>
    Coustomers
        <Box style={{ height: 500 }} >
       
          <Box class="bgs"
            style={{
              height: 500,
              overflowY: "auto",
        
              display: "flex",
              flexGrow: 1,
              flexDirection: "column"
            }}
          >
            
          <div   >
          <div class="card-body">
            <div >
            <div >

            {

uniqueItems.length>=1 ?
uniqueItems.map(me => 



 <Button variant="outlined"     style={{width:280}} onClick={joinRoom(me[0].author_id,me[0].author)} >  <div class="card bgs1" >
 
<h5 style={{color:"black"} }>{me[0].author}</h5 >

  </div>
  </Button>


)
:
<h1>loding.....</h1>

}


            </div>
            </div>

          </div>


          </div>

    

          </Box>
        </Box>
      </Card>

    </div>
    <br></br>
    <br></br>
    <div class="col-sm-4 text-dark ">
    <br></br>

    <Hlcchatroom socket={socket} username={username} room={room} chatwith={chatwith} key={key} />
    </div>
    <div class="col-sm-5 bg-black text-white ">
    <br></br>
<HlcUserformdata  username1={username1} user_id={user_id} hlc_id={hlcid} chatwith={useer_name} key={key}  />
   
    </div>

    </div>


    </div>
  );
}

export default Hlcchat;
