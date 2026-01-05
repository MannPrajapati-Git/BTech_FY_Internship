import React from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data,setData] = React.useState([]);
  
  // React.useEffect(()=>{

  //   fetch("https://fakestoreapiserver.reactbd.org/api/products")
  //   .then(res=>res.json())
  //   .then(res=>{
  //     console.log(res)
  //     setData(res.data)
  //   })
  //   .catch((err)=>console.log(err))
  // },[])

  React.useEffect(()=>{
    axios.get("https://fakestoreapiserver.reactbd.org/api/products")
    .then(res=>setData(res.data.data))
    .catch((err)=>console.log(err))

  },[])

  
  return (
    <div className='main'>
    {
      data.map((value)=>{
        return(<div className='product'>
          {value.title}<br />
          {value.price}<br />
          <img src={value.image} width={100} height={100} />
        </div>)
      })
    }
    </div>
  );
}

export default App
