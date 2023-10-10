import React, { useState } from 'react'
import loginb from './loginb.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import {auth} from './Firebase';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Reg = () => {



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const[data,setdata]=useState({
    username:"",
    email:"",
    pass:"",
  })
 const{ username,email,pass}={...data}

 const chanfehandler=e=>{
  setdata({...data,[e.target.name]:e.target.value});
 }

const onsub=e=>{

  e.preventDefault();
  axios.post('http://localhost:5000/store-data',data).then(
    ()=>{
        alert('data send');
    
    }
   );

   auth.createUserWithEmailAndPassword(email,pass).then(
    user => console.log(user)
    ).catch(err => console.log(err))

  handleClickOpen();
}

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const background = {
      backgroundImage: `url(${loginb})`,
      height: "670px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  };

  return (
    <div>
  
 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"you have sucessfully registered "}</DialogTitle>
       
        <DialogActions>
          
          <Button onClick={handleClose}><Link to='/Dashbord'  > Agree to login</Link></Button>
        </DialogActions>
      </Dialog>


    <div style={background}>
      <Box     sx={{
        width: 500,
        height: 600,
        margin: 0,
      
        marginLeft:56,
        backgroundColor: 'white',
        opacity:0.4,
        '&:hover': {
          backgroundColor: 'white',
          opacity:9,
         
        },
      }}
    >

      
 <Typography variant="h3" sx={{ flexGrow: 1 }} >
            <div style={{"textAlign":"center"}}>  Registration</div>
         
          </Typography>
          <br></br>
          <form  onSubmit={onsub}>
          <TextField  name= "username" value={username} style={{  marginLeft:80, width:350} }id="outlined-basic" label="username" variant="outlined" onChange={chanfehandler}  />
<br></br>
<br></br>

       
<TextField  name="email" value={email}  InputProps={{
            startAdornment: <InputAdornment position="start"> <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /></InputAdornment>,
          }} style={{  marginLeft:80, width:350} }id="outlined-basic" label="Email id" variant="outlined" onChange={chanfehandler} />

<br></br>
<br></br>
        
          <InputLabel  style={{  marginLeft:80, width:350} } htmlFor="standard-adornment-password">Password</InputLabel>
          <Input  style={{  marginLeft:80, width:350} }
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment  position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
             />
       
        <br></br>
        <br></br>
       
          <InputLabel    style={{  marginLeft:80, width:350} } htmlFor="standard-adornment-password"> conform Password</InputLabel>
          <Input  name ="pass" value={pass} style={{  marginLeft:80, width:350} }
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={ 
              <InputAdornment  position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={chanfehandler}  />
           
     
        <br></br>
        <br></br>
        <br></br>
        <Checkbox style={{ marginLeft:68}} {...label} defaultChecked color="secondary" /><h>i agree to the <Link to='/Condition'> terms and conditions</Link> </h>
        <br></br>
        <br></br>
        <br></br>
      <div className='col-sm-offset-2 col-sm-10'>
        <center>
        <input  type="submit" className="btn btn-success" value="reg" onClick={onsub} />
        </center>
      </div>
      </form>
      </Box>
   
   
      
    </div>
    
    </div>
  )
}

export default Reg