import React,{useEffect,useState} from 'react'
import img from './hc.jpg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Margin } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import axios from 'axios';
function Hlcuserm() {

const [mid,setmid]=useState(5)
const [result1,setre]=useState([])
const MINUTE_MS = 1000;
  useEffect(() =>{
   const interval = setInterval(() => {
axios.post('http://localhost:5000/getchatun',{mid:mid}).then(res => setre(res.data.result1)).catch((err) => console.log(err))

}, MINUTE_MS);
  
return () => clearInterval(interval);

},[])

console.log(result1)
    const background = {    
        backgroundImage: `url(${img})`,
        height: "662px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
  return (
    <div style={background}>
    
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <div class="row" style={{margin:2}} >
    <div class="col-sm-3   text-black">
        
        
      <Card style={{ height: 500 }}>
        Coustomers
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
            
          <div class="card"  >
          <div class="card-body">
            <div class="card">
            <div class="card-body">

            {

result1.length>=1 ?
result1.map(message=><div class="card" >
  <div class="card-body">

<div style={{"textAlign":"left"}} >
<h5 calss="card-title" >{message.fromid}</h5 >
<p>{message.message}</p>
</div>



       
  </div>
  </div>
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
      </Card></div>
    <div class="col-sm-5  bg-dark text-white">
        .col</div>
  </div>

    
    </div>
  )
}

export default Hlcuserm