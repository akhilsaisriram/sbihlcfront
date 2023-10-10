import React,{useContext,useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import ChatIcon from '@mui/icons-material/Chat';
import Chathlcuser from './Chathlcuser';
import io from "socket.io-client";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
const socket = io.connect("http://localhost:5000");

function Workhlc() {

const [aclist,setac]=useState([])
const [favlist,setfavac]=useState([])
const [peraclist,setperac]=useState([])
const [page,setpage]=useState("0")
const [uid,setuid]=useState("0")
const [peruserfiles,setperfiles]=useState([])

const [los,setlos]=useState("")
const [sacamt,setsamt]=useState("")
const [ifsc,setifsc]=useState("")
const [acno,setacno]=useState("")
/////////////////////////////
const [username, setUsername] = useState("jarvis");
const [username1, setUsername1] = useState("jarvis");
const [chatwith, setUsername11] = useState("");
const [room, setRoom] = useState("");
const [showChat, setShowChat] = useState(false);
 const [key, setKey] = useState(0);

 const [allvarsan,setsanv]=useState([])
 
 const [amtdone,setsandone]=useState(0)
 ///////////////////////////////////////////////////

useEffect(() =>{
  
      
    axios.post('http://localhost:5000/getaclist',{hlcid:localStorage.getItem('hlcid')}).then(res => setac(res.data)).catch((err) => console.log(err))
    axios.post('http://localhost:5000/getfavlistofuser',{hlcid:localStorage.getItem('hlcid')}).then(res => setfavac(res.data)).catch((err) => console.log(err))

    axios.post('http://localhost:5000/sanamthlc',{hlc_id:localStorage.getItem('hlcid')}).then(res => setsandone(res.data)).catch((err) => console.log(err))

   
    },[])



    const peracdata= (text,tt)=> e=> {
        e.preventDefault();
        setuid(text)
        setUsername(tt)
        axios.post('http://localhost:5000/getuserform',{user_id:text}).then(res =>setperac(res.data)).catch((err) => console.log(err))
     // console.log(":SKJBDF",peraclist)
     axios.post('http://localhost:5000/getuserfiles',{user_id:text,hlcid:localStorage.getItem('hlcid')}).then(res =>setperfiles(res.data)).catch((err) => console.log(err))
console.log(peruserfiles)


const ik=localStorage.getItem('hlcid')+text
console.log(ik)

  setRoom(ik)

  e.preventDefault();
    socket.emit("join_room", ik);
    setShowChat(true);
   setKey(prevKey => prevKey + 1);
      }

console.log("room",room)


const [openchat, setOpencgat] = React.useState(false);
const handleClickOpen111 = () => {
  setOpencgat(true);

};

const handleClose111 = () => {
  setOpencgat(false);

 
};
const handleSelect = (eventKey) =>{


  setpage(eventKey)
  handleClose111()

//alert(`selected ${eventKey}`)
};

/////////////
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const sanctionreq=e=>{
e.preventDefault()
console.log("SHF")

axios.post('http://localhost:5000/sanctionreq',{user_id:uid,hlc_id:localStorage.getItem('hlcid'),ifsc:ifsc,sacamt:sacamt,los:los,username:username,hlcname:localStorage.getItem('hlcname'),acno:acno}).then(res =>alert(res.data)).catch((err) => console.log(err))
handleClose()
}

const as=()=>{


}
  return (
    <div className="work">
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
          
                   
                <h5 class="display-6">Work space  </h5>
                
        
          </Typography>
          <Typography variant="h" component="div" sx={{ flexGrow: 1 }}><h >Target amount:50,00,000 rs</h> 
          <br></br>
          <h>Sanctioned amount: {amtdone} rs</h>
          </Typography>
          

          <Nav variant="pills"  onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" >pdf1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">pdf 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="3">Option 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" >Active 4</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="5">Option 5</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="6">Option 6</Nav.Link>
      </Nav.Item>
    </Nav>




          
        </Toolbar>
      </AppBar>
    </Box> 
<div>
    <br></br>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 ">
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
<div>
       <div  style={{
        // Set the width of the div
        height: '320px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}> 
        <h></h>
                 <center>
                    
<h>The users You have accepted</h><br></br><br></br>
                   {aclist.map(mm=><div>
                    <Button variant="outlined"  style={{width:180,borderRadius:9}}  onClick={peracdata(mm.user_id,mm.username)}>  <div >
 
 <h5 style={{color:"black"} }>{mm.username}</h5 >
 
   </div>
   </Button> 
 
 </div>)}

 </center>  
 </div> 
 <hr ></hr>
 <div  style={{
        // Set the width of the div
        height: '200px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
<center>
                    
                    <h>The users in the wishlist</h><br></br><br></br>
                                       {favlist.map(mm=><div>
                                        <Button variant="outlined"  style={{width:180,borderRadius:9}}  onClick={peracdata(mm.user_id,mm.user_name)} >  <div >
                     
                     <h5 style={{color:"black"} }>{mm.user_name}</h5 >
                     
                       </div>
                       </Button> 
                     
                     </div>)}
                    
                     </center>  

      </div>
 </div>
</Box>
</div>
    </div>

    <div class="col-sm-4" >
<Box sx={{
       
       height: 555,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.57,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.92,
        
       },
     }}>

<center>
  <h4>The full Details of the User</h4>
</center>
{peraclist.map(message=><div  >
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
<center>
<ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button  variant="outlined"  style={{width:190,borderRadius:9}} onClick={handleClickOpen}  >Loan sanctioned</Button>
  <Button  variant="outlined"  style={{width:190,borderRadius:9}}  >Loan Rejected</Button>
  <abbr title="Chat"><IconButton  style={{borderRadius:9}} onClick={handleClickOpen111}><ChatIcon sx={{color:"blue",fontSize:30}} /></IconButton></abbr>

  </ButtonGroup>
  </center>
</div>
)}
     </Box>
     </div>
   
     <div class="col-sm-5" >


{/* <Box sx={{
       width:200,
       height: 505,
      //  margin: 4.5,
      //  marginLeft: 2,
      borderRadius:5,
       backgroundColor: 'white',
       opacity:0.57,
       '&:hover': {
         backgroundColor: 'white',
         opacity:0.92,
        
       },
     }}> */}

     {
      openchat? <div>:<h><Chathlcuser socket={socket} username={username} room={room}  key={key} /> </h></div>:
<div>
{
  page==="0"? <center><h style={{color:"white"}}>please select any pdf option to view</h></center>:<h></h>
}
{
   page==="1"? <center><h> {peruserfiles.map(mm=><embed src={mm.pdf1} type="application/pdf" width="100%" height="560px"/>)}</h></center>:<h></h>
}
{
   page==="2"? <center><h> {peruserfiles.map(mm=><embed src={mm.pdf2} type="application/pdf" width="100%" height="560px"/>)}</h></center>:<h></h>
}   
{
   page==="3"? <center><h> pdf 1</h></center>:<h></h>
}
{
   page==="4"? <center><h> pdf 2</h></center>:<h></h>
}   
{
   page==="5"? <center><h> pdf 1</h></center>:<h></h>
}
{
   page==="6"? <center><h> pdf 2</h></center>:<h></h>
} 
</div>
  
     }
     {/* </Box> */}



     </div>

  </div>
</div>



</div>
<Dialog open={open} onClose={handleClose}>
        <DialogTitle>LOS varification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To varify your Loan saction varification please enter the LOS number
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="LOS number"
            onChange={e=>setlos(e.target.value)} 
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Coutomer AC number"
            onChange={e=>setacno(e.target.value)} 
            fullWidth
            variant="standard"
          />
             <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Sanction amount "
            onChange={e=>setsamt(e.target.value)} 
            fullWidth
            variant="standard"
          />
                       <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Sanction bank IFSC Code"
            onChange={e=>setifsc(e.target.value)} 
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sanctionreq}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Workhlc