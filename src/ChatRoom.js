import React, { useState,useEffect } from 'react'
import img from './hc.jpg'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import './App.css'
import Card from 'react-bootstrap/Card';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ScrollToBottom from "react-scroll-to-bottom";


function ChatRoom({ socket, username, room ,rows, hlcid}) {
  let params=useParams();

console.log("rows")
// console.log(rows)

const hlcdata = rows.find(obj => {
  return obj.id === room.replace(localStorage.getItem('uid'),'');
});

console.log("hii",hlcdata)

  const [chathistory,sethistory]=useState([])
  const [chathistoryonlymessage,sethistory11]=useState([])


  const [revie,setmsg1]=useState([])
  useEffect(() =>{
  
   // axios.post('http://localhost:5000/hlcdata',{id:cid}).then(res =>{ setmsg12(res.data);setmsg1(res.data.reviews)}).catch((err) => console.log(err))
    axios.post('http://localhost:5000/chathistory',{ group_id: room}).then(res =>{ sethistory(res.data)}).catch((err) => console.log(err))
 
     },[])
 console.log(chathistory)
    
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        authorid:localStorage.getItem('uid'),
        author: username,
        message_text: currentMessage,
        time:
          new Date(Date.now()).getHours()+
          ":" +
          new Date(Date.now()).getMinutes()+":"+ new Date(Date.now()).getSeconds(),
         
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);

     //axios.post('http://localhost:5000/postmessage',{group_id:room,message:messageData}).then(res =>alert('send to database')).catch((err) => console.log(err))



      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
 console.log(messageList)
  ////////////////////////////////////costomer data form

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [phone,setphone]=useState("")
  const [adhar,setadhar]=useState("")
  const [pan,setpan]=useState("")
  const [adress,setadress]=useState("")
  const [nadress,setnadress]=useState("")
  const [occu,setoccu]=useState("")
  const [income,setincome]=useState("")
  


  ///////////////////////////////////////
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  const onsubform=e=>{
    e.preventDefault();
    axios.post('http://localhost:5000/filluserform',{user_id:localStorage.getItem('uid'),hlc_id:room.replace(localStorage.getItem('uid'),''),username:name,email:email,phone:phone,adhar:adhar,pan:pan,newaddress:adress,salary:income,occupation:occu,presentaddress:nadress}).then(() =>{ alert('form submitted');handleClose()}).catch((err) => console.log(err))
  
  }


  /////////////////////////////remove duplicates

  const uniqueItems = [...new Set(messageList.map(item => item.time))].map(time => {
    return messageList.find(item => item.time === time);
  });


  return (
    <div   >
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
            News   
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
{/* div tag with for chat review detalis */}
      <div class="row" style={{margin:2 }} >
      <div class="col-sm-3 text-black" >
      <Card>
            <Card.Img variant="top" height={150} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Detals</Card.Title>
              <Card.Title>varifid</Card.Title>
              
              <Card.Text>
                {                   hlcdata &&<div>
<Card.Title>rating {hlcdata.rating}</Card.Title>
<Card.Title>experiance {hlcdata.exp}</Card.Title>                
              Name:  {hlcdata.username}<br></br>
              Phonenumber: {hlcdata.phone}<br></br>
              Email: {hlcdata.email}<br></br>
              Address: {hlcdata.phone}<br></br>
              <h>Bank  {hlcdata.bank}</h><br></br>

<h>Branch {hlcdata.city}</h><br></br>
<h>can do in: {hlcdata.cando}<br></br>
message:
</h>
<br></br>
</div>


                } 
              <Button variant="outlined" onClick={handleClickOpen}>Accept </Button>
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
  <div class="col-sm-4 bg-balck  text-dark">

  <div className="chat-window">
      <div className="chat-header">
       
        <p>Live Chat </p>
   
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
        {chathistory.map(me=><div>
            {(me.messages).map(mess=>
              <div 
                className="message"
                id={username === mess.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{mess.message_text}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{mess.time}</p>
                    <p id="author">{mess.author===username? <h>you</h>:<h>{mess.author}</h>}</p>
                  </div>
                </div>
              </div>
              
          )}
             </div>
             )}

  
          {uniqueItems.map((messageContent) => {
            return (

<div>
           
              <div 
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message_text}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author===username? <h>you</h>:<h>{messageContent.author}</h>}</p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>

  
  
  
  </div>
  <div class="col-sm-3   text-dark">
      

      
  <Card style={{ height: 500,width:410 ,marginLeft:-15}}>
        <Box style={{ height: 500 }} >
       
          <Box
            style={{
              height: 500,
              overflowY: "auto",
        
              display: "flex",
              flexGrow: 1,
              flexDirection: "column"
            }}
          >
            
          <div class="card bgs"  >
          <div >
        
            <div>
            <div class="card-body">
            
                   {

                  
                    (hlcdata.reviews).map(mess=><div class="card" >
                      <div class="card-body">
                 
                    <div style={{"textAlign":"left"}} >
                      <div>
                    <h5 calss="card-title"  > {mess.sendername}  </h5 > <h > <Rating   style={{textAlign:"right"}} name="disabled" value={mess.rate} disabled /></h>
              </div>
              
                    <h> {mess.message_text}</h>
                    </div>
                    
                           
                      </div>
                      
                      </div>
                    )
                    
                  } 
            </div>
            </div>
          </div>
          </div>
         </Box>
        </Box>
      </Card>
    
     
        </div>
        </div>
     {/* dialog for accep hlc submit */}
      <Dialog open={open} onClose={handleClose} sx={{ m: -3, p: 0 }}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please provide  these following information to hcl in order to Accept your request <strong style={{color:"red"}}>by checking cibil few mards will drop and this website is not responsible for any data leaks</strong>
          </DialogContentText>
          <TextField
            autoFocus
            name= "name" value={name}
            onChange={e=>setname(e.target.value)} 
            margin="dense"
            id="outlined-basic"
            label="full name"
            variant="outlined"
            required
          /> <h> </h>
           <TextField
            autoFocus
            margin="dense"
            name= "email" value={email}
            onChange={e=>setemail(e.target.value)} 
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            required
          /> 
               <TextField
            autoFocus
            margin="dense"
            name= "phone" value={phone}
            onChange={e=>setphone(e.target.value)} 
            id="outlined-basic"
            label="phone number"
            variant="outlined"
            required
          /> 
           <TextField
          autoFocus
          name= "adhar" value={adhar}
          onChange={e=>setadhar(e.target.value)} 
          margin="dense"
          id="outlined-basic"
          label="Adhar number"
     
          variant="outlined"
          required
        />
           <TextField
            autoFocus
            name= "pan" value={pan}
            onChange={e=>setpan(e.target.value)} 
            margin="dense"
            id="outlined-basic"
            label="pan card number"
           
            variant="outlined"
            required
            helperText="to know your cibil score"
          />
             <TextField
            autoFocus
            margin="dense"
            name= "adress" value={adress}
            onChange={e=>setadress(e.target.value)} 
            style={{width:500}}
            id="outlined-basic"
            label="Address of the new house"
           
            variant="outlined"
          />
                <TextField
            autoFocus
            margin="dense"
            name= "nadress" value={nadress}
            onChange={e=>setnadress(e.target.value)} 
            style={{width:500}}
            id="outlined-basic"
            label="Address of the present house"
           
            variant="outlined"
          />
           <TextField
            autoFocus
            name= "occu" value={occu}
            onChange={e=>setoccu(e.target.value)} 
            margin="dense"
            style={{width:500}}
            id="outlined-basic"
            label="occupation"
           
            variant="outlined"
          />
             <TextField
            autoFocus
            name= "income" value={income}
            onChange={e=>setincome(e.target.value)} 
            id="outlined-basic"
            label="salary/income Annually"
            helperText="maximum loan amount whould be 75% of your Annual income"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onsubform}>Submit</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default ChatRoom;