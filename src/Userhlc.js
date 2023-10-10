import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAlert from '@mui/material/Alert';
import { Card } from 'react-bootstrap';
import MailIcon from '@mui/icons-material/Mail';
import Snackbar from '@mui/material/Snackbar';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import { CChart } from '@coreui/react-chartjs'
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
import Chart from "chart.js/auto";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Drawer from '@mui/material/Drawer';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GppBadIcon from '@mui/icons-material/GppBad';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from './functions';
import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import fileDownload from "js-file-download";
import fileSaver from "file-saver";
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

export const data1 = {
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
const Userhlc = () => {
  
  const [item, setItem] = useState({  hlc_id:localStorage.getItem('hlcid'),image: '' });
  const [items, setItems] = useState([])
  //const {image}=[...item]
  const [open1, setOpen1] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
  // axios.post('http://localhost:5000/sendfile',{hlc_id:localStorage.getItem('hlcid'),typeofit:"pdf",image:item.image}).then(res =>alert("send") ).catch((err) => console.log(err))
  const result = await createItem(item);

  setItems([...items, result]);


   axios.post('http://localhost:5000/reqbm',{hlc_id:localStorage.getItem('hlcid')}).then(res =>alert("send") ).catch((err) => console.log(err))


  }
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen11 = () => {
    setOpen11(true);
  };

  const handleClose11 = () => {
    setOpen11(false);
  };
    const navigate = useNavigate();
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))

    },[])
    if(!localStorage.getItem('token')){
        navigate("/Userhlclogin")
        
    }
console.log(data)
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
////////////////////////////////////////////////////////////
const [sanlos,setlos]=useState([])
 
const [amtdone,setsandone]=useState(0)
const MINUTE_MS = 1000;
useEffect(() =>{
 const interval = setInterval(() => {

      axios.post('http://localhost:5000/sanctionlist',{hlc_id:localStorage.getItem('hlcid')}).then(res => setlos(res.data)).catch((err) => console.log(err))
      axios.post('http://localhost:5000/sanamthlc',{hlc_id:localStorage.getItem('hlcid')}).then(res => setsandone(res.data)).catch((err) => console.log(err))

    }, MINUTE_MS);
  
    return () => clearInterval(interval);
   
   },[])
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  ////////////////////////////////////////////////
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
     // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <br></br><br></br>
     <IconButton onClick={handleClickOpen1}><SendIcon/> Request bm to varify</IconButton>
      <IconButton onClick={handleClickOpen11}>Status of request</IconButton>

      <IconButton onClick={handleClickOpen11}>Status of LOS</IconButton>
    </Box>
  );
  ///////////////////////////////////////////////
    return (
<div  class="imag">
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
            {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:"white"}}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
          
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {
                data &&     
                <center> <h5 class="display-6">Hi : {data.username} { localStorage.setItem('hlcid',data.id)}{localStorage.setItem('hlcname',data.username)}</h5></center> 
                   
        }
          </Typography>
          <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
<Badge badgeContent={4} color="error">
{/* {data &&
<Link to={`/Userhlc/Hlcchat`} > < ChatIcon style={{color:"white"}}/></Link>


} */}
<Dropdown>
<Dropdown.Toggle variant="Secondary" id="dropdown-basic">
< ChatIcon style={{color:"white"}}/>
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="/Userhlc/Hlcchat">Coustomer chat<ChatIcon style={{color:"blue"}}/></Dropdown.Item>
  <Dropdown.Item href="Userhlc/Bmchat">Manager chat <ChatIcon style={{color:"blue"}}/></Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

</Badge>
</IconButton>

          <Button color="inherit"  onClick={() => {localStorage.removeItem('token'); navigate("/Userhlclogin")}}>Logout</Button>
          
        </Toolbar>
      </AppBar>
    </Box> 
    <Navbar bg="dark" variant="dark">
        <Container className="text-center">
          
          <Nav className="me-auto "style={{marginLeft:450}} >
            <Nav.Link href="Userhlc/Emical" >EMI calculator</Nav.Link>

            
            <Nav.Link href="Userhlc/Workhlc" >Work space</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<div>
<br></br> 
<div class="container mt-6">
<div class="row ">
 
    <div class="col-sm-4 p-5  pseudo">
     <h5 class="display-6" style={{color:"orange"}}><small>monthly target:</small></h5>
     <h>525252525 rs </h>
     <h5 class="display-6" style={{color:"orange"}}><small>loans done amt</small></h5>
     <h>{amtdone} rs </h>
     <h5 class="display-6" style={{color:"orange"}}><small>amt available</small></h5>
     <h>525252525 rs</h>

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
        
       
      },}}><Line options={options} data={data1} /></Box>
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
       <center><h class="display-6">Status of the LOS request</h>
       <div style={{
        // Set the width of the div
        height: '300px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
       {
        sanlos.map(mm=>
          <div>
           <b><h>Your request to varify los is {mm.varfied==="1" ? <h>{ mm.var==="1"? <h style={{color:"green"}}> varifed</h>:<h></h>}</h>:<h> {mm.var==="1"? <h style={{color:"red"}}> rejected</h>:<h style={{color:"red"}}> still pending</h>}</h>}</h></b> 
           <br></br>
            <h>The LOS number :{mm.los}</h>
            <br></br>
            <h>Coustomer name :{mm.username}</h><br></br>
            <h>Sanctioned Amount: {mm.sacamt}</h><hr></hr>
          </div>
          )
       }
       </div>
       </center> 

      </Box>

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
<Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Fill the form to send Request to bm to varify your identity as HLC so that ur varify batch can be circulated on website
          </DialogContentText>
          <br></br>
          <br></br>
       <h>please upload your hlc id card in pdf format only</h>
             {/* <pre>{JSON.stringify(item, null, '\t')}</pre> */}
      <form action="" >
      
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
        {/* <button className="btn">submit</button> */}
        </div>

      </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={onSubmitHandler}>Send</Button>
        </DialogActions>
      </Dialog>
  
      <Dialog open={open11} onClose={handleClose11}>
        <DialogTitle>Status</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <br></br>
          <br></br>
{data&& <h>The request you have send had {data.var==="0"? <h style={{color:"red"}}>not varfied<GppBadIcon/><h style={{color:"black"}}> yet please contact branch for further information(note: varification can take 5 working days so please wait till then)</h></h>:<h style={{color:"green"}}>varifed sucessfully <VerifiedUserIcon/></h>} </h>}   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose11}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
  

        </div>
    )
}

export default Userhlc