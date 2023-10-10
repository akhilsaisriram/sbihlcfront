import React from 'react'
import bas from './lake-1802337.jpg'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const Home = () => {
  const background = {
    backgroundImage: `url(${bas})`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};


  return (
    <div style={background}>
      
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
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            <div style={{"textAlign":"center"}}>  Arrange your finance</div>
         
          </Typography>
         
          <ButtonGroup>
      

      <DropdownButton as={ButtonGroup} title="Login" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1"><Link style={{color: 'black'}} to='/Dashbord'  color='red'> Login to user</Link></Dropdown.Item>
        <Dropdown.Item eventKey="2"><Link style={{color: 'black'}} to='/Bmdash'  color='red'> Login to maneger</Link></Dropdown.Item>
        <Dropdown.Item eventKey="3"><Link style={{color: 'black'}} to='/Userhlclogin'  color='red'>Login for Hlc </Link></Dropdown.Item>
      </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Register" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1"><Link style={{color: 'black'}} to='/Reg'  color='red'>Register for user </Link></Dropdown.Item>
        <Dropdown.Item eventKey="2"><Link style={{color: 'black'}} to='/Managerreg'  color='red'>Register for maneger </Link></Dropdown.Item>
        <Dropdown.Item eventKey="3"><Link style={{color: 'black'}} to='/Userhlcreg'  color='red'>Register for Hlc </Link></Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>  
       
    <div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
    <Box
      sx={{
        width: 300,
        height: 300,
        margin: -2,
        marginTop:8,
        marginLeft:-3,
        backgroundColor: 'white',
        opacity: [0.9, 0.8, 0.7],
        '&:hover': {
          backgroundColor: 'white',
         
        },
      }}
    >
      <h4>About this website</h4>
     
     
      <p>this  page is mainly designed for those who is willing to know how their financel position help them to get any lone and 
        this also get the the posibility to get loan by checking with various banks  </p>
        <br></br>
      
      <p>and it has hlc section for to maintain theie stastics organised</p>
      </Box>

    </div>
  
  
  </div>
</div>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>contact us</p>
  <p> phone number : 123456789</p>
  <p>mail id:aaa@gmail.com</p>
</div>

    </div>
  )
}

export default Home