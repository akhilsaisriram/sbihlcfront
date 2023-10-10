import './App.css'
import React,{useEffect,useState} from 'react'
import img from './hc.jpg'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAlert from '@mui/material/Alert';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import MailIcon from '@mui/icons-material/Mail';
import Snackbar from '@mui/material/Snackbar';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import { CChart } from '@coreui/react-chartjs'
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
import Chart from "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:  [0,1,2,3,4,5,6],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [6,5,7,2,5,4,2],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Hlcuserm() {
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


  return (
    <div class="imag">
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
            News
          </Typography>
          <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
<Badge badgeContent={4} color="error">
<Link to={`/Userhlc/Hlcchat`} > < ChatIcon style={{color:"white"}}/></Link>
</Badge>
</IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> 

<div>
<br></br> 
<div class="container mt-6">
<div class="row ">
 
    <div class="col-sm-4 p-5  pseudo">
     <h5 class="display-6" style={{color:"orange"}}><small>monthly target:</small></h5>
     <h>525252525 </h>
     <h5 class="display-6" style={{color:"orange"}}><small>loans done amt</small></h5>
     <h>525252525 </h>
     <h5 class="display-6" style={{color:"orange"}}><small>amt available</small></h5>
     <h>525252525 </h>

    </div>
   
    <div class="col-sm-7   text-white "  >performance graph
    
    <Box sx={{  
     height:310,
     borderRadius:5,
      backgroundColor: 'white',
      opacity:0.55,
      '&:hover': {
        backgroundColor: 'white',
        opacity:0.89,
        boxShadow: 3
        
       
      },}}><Line options={options} data={data} /></Box>
    </div>
     
    
  </div>
  </div>
</div>
<div  class="d-flex align-items-center justify-content-center" >

<Box sx={{  
     height:310,
     width:900,
     borderRadius:5,
      backgroundColor: 'white',
      opacity:0.55,
      '&:hover': {
        backgroundColor: 'white',
        opacity:0.89,
        boxShadow: 3
        
       
      },}}>
       <center><h class="display-6">Circular to all Hlcs</h></center> 

      </Box>

</div>
    </div>
  )
}

export default Hlcuserm