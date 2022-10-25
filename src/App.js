import React from 'react';
import '@fontsource/roboto';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import axios from "axios";
import { useEffect, useState } from 'react';




function App() {
  
  
  const [data, setData] = useState("")

 

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  
  
  
  
  return (
    <div className='container'>
      <div className="row main">
        <div className='col-sm-3'>
          <Navbar data={data}/>
        </div>
        <div className="col-sm-9">
          <Content data={data}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
