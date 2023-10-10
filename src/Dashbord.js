import React,{useEffect,useState,createContext} from 'react'
import { autha } from "./firebase.config";
import Login from './Login';
import Main from './Main';

export const store = createContext();
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
 <store.Provider value={[presentUser,setPresentUser]}>
      <center>
        {presentUser ? <Main presentUser={presentUser}/> : <Login /> }
      </center>
      </store.Provider>
    </div>
  )
}

export default App