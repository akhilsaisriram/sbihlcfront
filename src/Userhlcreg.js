import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import loginb from './loginb.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import './App.css'
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


const Userhlcreg = () => {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
    const[data,setData]=useState({
      username:"",
      email:"",
      password:"",
 
      city:"",
      bank:"",
      phone:"",
      cando:"",
      exp:""
    })
   const{ username,email, password,city,bank,phone,cando,exp}={...data}


  
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => {alert(res.data);setData({
                username:'',
                email:'',
                password:'',             
                city:'',
                bank:'',
                phone:'',
                cando:'',
                exp:''
            });navigate("/Userhlclogin");}
        )

    }
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    

    return (
        <div class="imag">
    <div>
    <center>
      <Box sx={{
        width: 500,
        height: 650,
        margin: 0,
      
       
        backgroundColor: 'white',
        opacity:0.4,
        '&:hover': {
          backgroundColor: 'white',
          opacity:9,
         
        },
      }}
    >
<center>
      
 <Typography variant="h3" sx={{ flexGrow: 1 }} >
            <div  style={{"textAlign":"center"}}> <h class="display-6">Registration</h></div>
         
          </Typography>
          <br></br>
          <form  onSubmit={submitHandler}>
          <TextField  name= "username" value={username} style={{   width:350} }id="outlined-basic" label="username" variant="outlined" onChange={changeHandler}  />
<br></br>
<br></br>

       
<TextField  name="email" value={email}  InputProps={{
            startAdornment: <InputAdornment position="start"> <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /></InputAdornment>,
          }} style={{  width:350} }id="outlined-basic" label="Email id" variant="outlined" onChange={changeHandler} />

<br></br>
<br></br>
<TextField  name="city" value={city}  style={{  width:120} }id="outlined-basic" label="city" variant="outlined" onChange={changeHandler} />


<TextField  name="bank" value={bank}   style={{  marginLeft:0, width:120} }id="outlined-basic" label="bank" variant="outlined" onChange={changeHandler} />
<TextField  name="exp" value={exp}  style={{  marginLeft:0, width:120} }id="outlined-basic" label="experiance in years" variant="outlined" onChange={changeHandler} />
<br></br>
<br></br>

<TextField  name="phone" value={phone}  style={{  marginLeft:0, width:350} }id="outlined-basic" label="phonenumber" variant="outlined" onChange={changeHandler} />

<br></br>
<br></br>
<TextField  name="cando" value={cando}   style={{  marginLeft:0, width:350} }id="outlined-basic" label="can do in" variant="outlined" onChange={changeHandler} />

<br></br>
<br></br>
        
          <InputLabel    style={{  marginLeft:0, width:350} } htmlFor="standard-adornment-password"> Password</InputLabel>
          <Input  name ="password" value={password} style={{  marginLeft:0, width:350} }
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
            onChange={changeHandler}  />
           
           
        <br></br>
        <Checkbox style={{ marginLeft:0}} {...label} defaultChecked color="secondary" /><h>i agree to the <Link to='/Condition'> terms and conditions</Link> </h>
      
      <div className='col-sm-offset-2 col-sm-10'>
        <center>
        <input  type="submit" className="btn btn-success" value="Register" onClick={submitHandler} />
        </center>
      </div>
      </form>
      </center>
      </Box>
   
      </center>
      
    </div>
    




        </div>
    )
}

export default Userhlcreg