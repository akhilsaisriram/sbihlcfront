import React,{useState,createContext} from 'react'

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Condition from './Condition';
import Dashbord from './Dashbord';
import Reg from './Reg';
import Managerreg from'./Managerreg';
import Main from './Main';
import Emical from './Emical';
import Bmmain from './Bmmain';
import Bmdash from './Bmdash';
import Hlc from './Hlc';
import Perhlc from './Perhlc';
import Userhlc from './Userhlc';
import Userhlcreg from './Userhlcreg';
import Userhlclogin from './Userhlclogin';
import Userhlcdash from './Userhlcdash';
import Hlcuserm from './Hlcuserm';
import Hlcchat from './Hlcchat';
import Bmvarhlc from './bm/Bmvarhlc';
import Bmvarlos from './bm/Bmvarlos';
import Bmhlc from './bm/Bmhlc';
import Workhlc from './hlc/Workhlc';
import Bmchat from './hlc/Bmchat';
export const store = createContext();
function App() {
 
  const [token,setToken] = useState(null);
  return (
    <div>
 <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
<Route path='/Dashbord' element={<Dashbord/>}/>
<Route path='/Hlcuserm' element={<Hlcuserm/>}/>
<Route path='/Bmmain' element={<Bmmain/>}/>
<Route path='/Condition' element={<Condition/>}/>
<Route path='/Reg' element={<Reg/>}/>
<Route path='/Main' element={<Main/>}/>
<Route path='/Bmdash' element={<Bmdash/>}/>
<Route path='/Dashbord/Emical' element={<Emical/>}/>
<Route path='/Bmdash/Emical' element={<Emical/>}/>
<Route path='/Userhlc/Emical' element={<Emical/>}/>
<Route path='/Userhlc/Workhlc' element={<Workhlc/>}/>
<Route path='/Managerreg' element={<Managerreg/>}/>
<Route path='/Hlc' element={<Hlc/>}/>
<Route path='/Bmdash/Bmhlc' element={<Bmhlc/>}/>
<Route path='/Perhlc/:id/:id2/:name' element={<Perhlc/>}/>
<Route path='/Userhlclogin' element={<Userhlclogin/>}/>
<Route path='/Userhlcreg' element={<Userhlcreg/>}/>
<Route path='/Userhlc' element={<Userhlc/>}/>
<Route path='/Userhlcdash' element={<Userhlcdash/>}/>
<Route path='/Userhlc/Hlcchat' element={<Hlcchat/>}/>
<Route path='/Userhlc/Bmchat' element={<Bmchat/>}/>
<Route path='/Bmdash/Bmvarhlc' element={<Bmvarhlc/>}/>
<Route path='/Bmdash/Bmvarlos' element={<Bmvarlos/>}/>
      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App