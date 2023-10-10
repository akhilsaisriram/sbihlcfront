import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from './App';
import { useNavigate } from "react-router-dom";

import loginb from './loginb.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Userhlclogin = () => {
    const navigate = useNavigate();
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:'',
    })

    const{ email, password}={...data}
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
             res => {setToken(res.data.token) ;
             localStorage.setItem('token',res.data.token)}
        )
    }
    if(localStorage.getItem('token')){
        navigate("/Userhlc")
     
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
        <Box     sx={{
          width: 500,
          height: 500,
     
          backgroundColor: 'white',
          opacity:0.4,
          '&:hover': {
            backgroundColor: 'white',
            opacity:9,
           
          },
        }}
      >
   <Typography variant="h3" sx={{ flexGrow: 1 }} >
              <div style={{"textAlign":"center"}}>  Login</div>
           
            </Typography>
            <br></br>
            <TextField   name= "email" value={email} style={{  marginLeft:0, width:350} }id="outlined-basic" label="email" variant="outlined" onChange={changeHandler}  />
  <br></br>
  <br></br>
            <FormControl variant="standard">
            <InputLabel  style={{   width:95} }>Password</InputLabel>
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
              onChange={changeHandler}/>
          </FormControl>
          <br></br>
          <br></br>
          <Checkbox style={{ marginLeft:0}} {...label} defaultChecked color="secondary" /><h>i agree to the <Link to='/Condition'> terms and conditions</Link> </h>
          <br></br>
          <h style={{ marginLeft:0}}>Didn't Registered yet<Link to='/Reg'> click here</Link> </h>
          <br></br>
          <br></br>
          <br></br>
          <Button style={{ marginLeft:0, width: 250}} variant="contained" color="success" onClick={submitHandler}>
          login
        </Button>
        </Box>
        </center>  


      </div>          
        </div>
    )
}

export default Userhlclogin