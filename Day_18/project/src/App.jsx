import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {

  const [userData, setUserData] = useState({})
  const doSum= () =>{
    var c = parseInt(userData.txt1) + parseInt(userData.txt2);
    setUserData({...userData, result: "Result : " + c});

  }

  return (
    <>
    <h1>Object Use in ReactJs </h1>
    <h3>Task : addition of two numbers using Object.</h3>
       No1 : <input type="text" onChange={(e)=>setUserData({...userData, txt1 : e.target.value})} /> <br /><br />
       No2 : <input type="text" onChange={(e)=>setUserData({...userData, txt2 : e.target.value})} /> <br /><br />
       <input type="button" value="Add" onClick={doSum} />
       <h3>{userData.result}</h3>
    </>
  )
}

export default App
