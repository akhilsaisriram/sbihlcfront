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
import Alert from 'react-bootstrap/Alert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import main from './main.jpg'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
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
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

 // const [status1,setmsg]=useState([])
  const MINUTE_MS = 1000;
  useEffect(() =>{
    const interval = setInterval(() => {
      
//axios.post('http://localhost:5000/getacceptst',{  user_id:presentUser.uid}).then(res => setmsg(res.data)).catch((err) => console.log(err))


}, MINUTE_MS);
  
return () => clearInterval(interval);

},[])
//console.log(status1)



//const [status11,setmsg1]=useState([])

const [bmdata,setbmdata]=useState([])
useEffect(() =>{

    
//axios.post('http://localhost:5000/getuserform',{ user_id:presentUser.uid}).then(res => setmsg1(res.data)).catch((err) => console.log(err))
axios.post('http://localhost:5000/getbmdata',{bm_id:presentUser.uid}).then(res => setbmdata(res.data)).catch((err) => console.log(err))



},[])

console.log(bmdata)
const [name,setname]=useState("")

const [phone,sphone]=useState("")
const [city,scity]=useState("")
const [bank,sbank]=useState("")
const [branch,sbranch]=useState("")
const [exp,setexp]=useState("")
const [ifsc,setifsc]=useState("")
const onsubform=e=>{
  handleClickOpen1()
  e.preventDefault();
  axios.post('http://localhost:5000/bmdataupdate',{bm_id:presentUser.uid,username:name,email:presentUser.email,phone:phone,city:city,bank:bank,branch:branch,exp:exp,ifsc:ifsc}).then(() =>{ alert('form submitted');handleClose1()}).catch((err) => console.log(err))

}

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
localStorage.setItem('mid',presentUser.uid);
localStorage.setItem('bm_name',presentUser.email);

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
          <center><h5 class="display-6"><small>Hi</small> {bmdata.username}{localStorage.setItem('ifsc',bmdata.ifsc)} </h5> </center>   
        
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
{bmdata.length>0?<div><Alert  open={false} variant="warning">
          You <h style={{color:"red"}}>have not </h>updated your bio please update it by clicking update <Button variant="outlined" onClick={onsubform}>update</Button>
        </Alert></div>:<h></h>
        

}
        <Navbar bg="dark" variant="dark">
        <Container className="text-center" >
          
          <Nav className="me-auto "style={{marginLeft:330}} >
        
            <Nav.Link href="Bmdash/Emical" >EMI calculator</Nav.Link>

            <Nav.Link href="Bmdash/Bmhlc" >HLC</Nav.Link>
            <Nav.Link href="Bmdash/Bmvarhlc">Varifcation of Hlcs</Nav.Link>
            <Nav.Link href="Bmdash/Bmvarlos">Varifcation of LOS</Nav.Link>
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
   
   </Box>
   </p>
 
      </Main>
    </Box>
<div>
<Box
      sx={{      
        height: 200,     
       width:700,
        backgroundColor: 'white',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: 'white',
          opacity: 0.8
        },
      }}
    >


    </Box>

</div>
<Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
           please fill the form to update your profile data to further procide with this website
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Full name"
            onChange={e=>setname(e.target.value)} 
            required
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Phone number"
            onChange={e=>sphone(e.target.value)} 
            required
            fullWidth
            variant="standard"
          />
               <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            onChange={e=>sbank(e.target.value)} 
            label="bank"
            
            required
            fullWidth
            variant="standard"
          />
                  <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Branch"
            onChange={e=>sbranch(e.target.value)} 
            required
            fullWidth
            variant="standard"
          />
               <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="City"
            required
            onChange={e=>scity(e.target.value)} 
            fullWidth
            variant="standard"
          />
               
               <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Experiance"
            onChange={e=>setexp(e.target.value)} 
            required
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="IFSC code"
            onChange={e=>setifsc(e.target.value)} 
            required
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={onsubform}>Submit</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}
