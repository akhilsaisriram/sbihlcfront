import React,{useEffect,useState} from 'react'
import { autha } from "./firebase.config";
import Login from './Login';
import Bmmain from './Bmmain';

const App = () => {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    autha.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user?.uid,
        email:user?.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser ? <Bmmain presentUser={presentUser}/> : <Login /> }
      </center>
    </div>
  )
}

export default App