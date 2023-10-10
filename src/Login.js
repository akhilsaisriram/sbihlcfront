import React ,{useState} from 'react'
import loginb from './loginb.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {autha} from "./firebase.config";

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Login = () => {
 
 

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

  const[data,setdata]=useState({
    username:"",
    pass:"",
  })
 const{ username,pass}={...data}

 const chanfehandler=e=>{
  setdata({...data,[e.target.name]:e.target.value});
 }


 
 
const onsub= async e=>{

  e.preventDefault();
  // axios.post('http://localhost:5000/loginvar',data).then(
  //   ()=>{
  //       alert('data send');
    
  //   }
  //  );
  autha.signInWithEmailAndPassword(username,pass).then(
    user => console.log(user)
    ).catch(err => alert('invalid password or id '))

                
}

  return (
    <div>

   
 
    <div style={background}>
        
      <Box     sx={{
        width: 500,
        height: 500,
        margin: 0,
      
        marginLeft:0,
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
          <TextField   name= "username" value={username} style={{  marginLeft:0, width:350} }id="outlined-basic" label="username" variant="outlined" onChange={chanfehandler}  />
<br></br>
<br></br>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel  style={{  marginLeft:-135, width:350} } htmlFor="standard-adornment-password">Password</InputLabel>
          <Input  name ="pass" value={pass} style={{  marginLeft:-63, width:350} }
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
            onChange={chanfehandler}/>
        </FormControl>
        <br></br>
        <br></br>
        <Checkbox style={{ marginLeft:0}} {...label} defaultChecked color="secondary" /><h>i agree to the <Link to='/Condition'> terms and conditions</Link> </h>
        <br></br>
        <h style={{ marginLeft:0}}>Didn't Registered yet<Link to='/Reg'> click here</Link> </h>
        <br></br>
        <br></br>
        <br></br>
        <Button style={{ marginLeft:12, width: 250}} variant="contained" color="success" onClick={onsub}>
        login
      </Button>
      </Box>
        
      

    </div>
    </div>
  )
    
}

export default Login