import React, { useState,useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { green } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { autha } from "./firebase.config";
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
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
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';


import main from './main.jpg'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { kkKZ } from '@mui/material/locale';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({presentUser}) {

  const [status1,setmsg]=useState([])
  const [sanction,setsan]=useState([])
  const MINUTE_MS = 5000;
  useEffect(() =>{
    const interval = setInterval(() => {
      
axios.post('http://localhost:5000/getacceptst',{  user_id:presentUser.uid}).then(res => setmsg(res.data)).catch((err) => console.log(err))
axios.post('http://localhost:5000/user_enq_san',{  user_id:presentUser.uid}).then(res => setsan(res.data)).catch((err) => console.log(err))


}, MINUTE_MS);
  
return () => clearInterval(interval);

},[])
console.log(status1)


const [open1, setOpen1] = React.useState(false);
const [hlcid,sethid]=useState()
const handleClickOpen1 = () => {

  setOpen1(true);

 //handleopen1()
};


const handleClose1 = () => {
  setOpen1(false);
};
const [status11,setmsg1]=useState([])
useEffect(() =>{

    
axios.post('http://localhost:5000/getuserform',{ user_id:presentUser.uid}).then(res => setmsg1(res.data)).catch((err) => console.log(err))



},[])
//////////////////////////////////////////////////
const [pdfFile1, setPdfFile] = useState(null);
const [pdfFile2, setPdfFile2] = useState(null);
const [uniqueCode, setUniqueCode] = useState("hiiiiii");

const handlePdfUpload = (file) => {
  setPdfFile(file.base64);
};
const handlePdfUpload2 = (file) => {
  setPdfFile2(file.base64);
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Send the PDF file and unique code to the backend as a base64 encoded string
  // using a POST request or any other suitable method

  axios.post('http://localhost:5000/sendfileuser',{ pdf1:pdfFile1,pdf2:pdfFile2,user_id:presentUser.uid,hlc_id:hlcid}).then(res =>alert(res.data) ).catch((err) => console.log(err))
console.log("pdf1",pdfFile1)
console.log("pdf2",pdfFile2)
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
///////
localStorage.setItem('uid',presentUser.uid);
localStorage.setItem('user_name',presentUser.email);
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>{presentUser.email}</MenuItem>
    <MenuItem onClick={() => autha.signOut()}>signout</MenuItem>
  </Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

/////////
const background = {
  backgroundImage: `url(${main})`,
  height: "670px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};


////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    
    <div style={background}>
       
    <Box sx={{ display: 'flex' }}>
      <CssBaseline  />
      <AppBar  color="primary"  position="fixed" open={open}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div">
          <center><h5 class="display-6"><small>Hi</small> {presentUser.email.replace('@gmail.com','')}</h5></center>   
          </Typography>
          
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {renderMobileMenu}
      {renderMenu}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>


      
      <Main open={open}>
        <DrawerHeader />
        <Navbar bg="dark" variant="dark">
        <Container className="text-center">
          
          <Nav className="me-auto "style={{marginLeft:450}} >
            <Nav.Link href="Dashbord/Emical" >EMI calculator</Nav.Link>

            <Nav.Link><Link to={`/Hlc`}>HLC</Link></Nav.Link>
            <Nav.Link href="#pricing">USER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
   <h3>Emi calcuator:</h3>
   <br></br>
   <p>
   <Box
      sx={{      
        height: 50,     
        marginTop:0,
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
   An EMI Calculator is a utility tool, which helps you to calculate the amount you repay each month towards your loan. You can use the EMI calculator and calculate the EMI amount on a car loan, home loan, bike loan, or a personal loan. You get an idea of the monthly repayments you make towards these loans.
   </Box>
   </p>
 
   <h3>HLC:</h3>
   <br></br>
   <p>
   <Box
      sx={{      
        height: 50,     
        marginTop:0,
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
   An HLC a person
He or she acts as intermediary between the borrower and clients. Loan Counsellor processes clients' application materials and verifies their information to come up with a financial plan. A Loan Counsellor holds the responsibility to explain the type, rate and terms of loans offered by the employing organisation.
   </Box>
   </p>
 
      </Main>
    </Box>
    <div class="container-fluid">
    <div   class="row " >
      <div class="col-sm-1 "></div>
<div  class="col-sm-5 " style={{
 scrollbehaviour: "smooth",
}}>
<Box
      sx={{      
        height: 200,     
     
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
      
      <div  style={{
        // Set the width of the div
        height: '200px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
<h4>Status of application by HLC</h4>
<h>please fill form only once</h>
{
   status11.length>0 ? 


   status1.length>0?
   status1.map(message=><div>
   
    <br></br>
   <h>{message.hlcname}  has {message.statusa==="1"? <h style={{color:"green"}}>Accepted  </h>:<h style={{color:"red"}}>not accepted</h>} your request  {message.statusa==="1"? <h style={{color:"green"}}>
    <TaskAltIcon/> <Button  variant="outlined" size="small" onClick={()=>{handleClickOpen1();sethid(message.hlc_id)}}>fill form</Button></h> :<h style={{color:"red"}}><CancelOutlinedIcon/></h>} </h>
        </div>     
 )
 :
 <h>the HLCs you have requested still not replayed please be wait some time till they respond</h>  
   
   
   :<h5 style={{margin:50,color:"red"}}>You haven't send any appication to any HLC so please visit HLC section to know more</h5>

}
  
</div>  </Box>

</div>



<div class="col-sm-5 " style={{
 scrollbehaviour: "smooth",
}}>
<Box
      sx={{      
        height: 200,     
      
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >
      
      <div  style={{
        // Set the width of the div
        height: '200px', // Set the height of the div
        overflow: 'auto', // Enable scrolling when the content exceeds the div size
        // Add a border for visual clarity
       // Add padding to the content to prevent it from touching the edges
        borderRadius:10
      }}>
<h4>Status of Sanction of Loan amount </h4>


{
sanction.length>0 ? <div>

  {
    sanction.map(message=><div>
<h>The Bank  has {message.var==="1"? <h style={{color:"green"}}>Sanctioned   </h>:<h style={{color:"red"}}>not Able to Sanction</h>} your Loan  {message.var==="1"? <h style={{color:"green"}}>
    .</h> :<h >For further enquary plese contact the bank or the respective Hlc</h>} </h>
    <br></br><br></br>

<h>LOS number :{message.los}</h>
<br></br>
{message.var==="1"?<h>Sanctioned amount :{message.sacamt}</h>:<h></h>}
<br></br>
<h>IFSC number :{message.ifsc}</h>


    </div>)
  }
</div>:<h5 style={{margin:50,color:"red"}}> <h>Still in the  process please be be patience</h> </h5>

}
  
</div>  </Box>

</div>
</div>
</div>

<Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Fill the form to send Request to Hlc to varify and presess the  your loan details and preceed toward saction of it in few working days
          </DialogContentText>
          <br></br>
          <br></br>
       <h>please upload the documents in pdf format only</h>
             {/* <pre>{JSON.stringify(item, null, '\t')}</pre> */}
      <form onSubmit={handleSubmit} >
      <h>Adhar card :</h>
        <FileBase64
          type="file"
          multiple={false}
        onDone={handlePdfUpload}
        />
        <br></br>
        <h>PAn card :</h>
           <FileBase64
          type="file"
          multiple={false}
        onDone={handlePdfUpload2}
        />
        <br></br><br></br>
       <button type="submit">Submit</button>

      </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
 
        </DialogActions>
      </Dialog>
  


    </div>
  );
}
