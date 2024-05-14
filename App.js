import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [userName, setUserName]=useState("");
  const[selectedNav,setSelectedNav]=useState(1);
  const[profileInfo,setProfileInfo]=useState("");
  const getuserinfo=async()=>{
    const {data}=await axios.get(`https://api.github.com/users/${userName}`);
    console.log(data);
    setProfileInfo(data);

  }
  return (
    <div>
      <div className='App-input'>
        <h1>Github User Information</h1>
        <input type='text' placeholder='Enter your login id'
        value={userName} onChange={(e)=> setUserName(e.target.value)}
        /><br/>
        <button onClick={getuserinfo}>Search</button>
      </div>
      <nav>
        <ul>
          <li className={selectedNav==1? "navActive":undefined}
          onClick={()=>setSelectedNav(1)}
          >Login</li>
          <li className={selectedNav==2? "navActive":undefined} onClick={()=>setSelectedNav(2)}>Company</li>
          <li className={selectedNav==3? "navActive":undefined} onClick={()=>setSelectedNav(3)}>Location</li>
          <li className={selectedNav==4? "navActive":undefined} onClick={()=>setSelectedNav(4)}>Repository</li>
        </ul>
      </nav>
      <div className='App-container'>
        {selectedNav===1?profileInfo!==""? <div>
          <h3>{profileInfo.login}</h3>
        </div>:<h1></h1>:undefined}
        {selectedNav===2?profileInfo!==""? <div>
          <h3>{profileInfo.company}</h3>
        </div>:<h1></h1>:undefined}
        {selectedNav===3?profileInfo!==""? <div>
          <h3>{profileInfo.location}</h3>
        </div>:<h1></h1>:undefined}
        {selectedNav===4?profileInfo!==""? <div>
          <h3>{profileInfo.repository}</h3>
        </div>:<h1></h1>:undefined}
        {}
      </div>
    </div>
  )
}

export default App
