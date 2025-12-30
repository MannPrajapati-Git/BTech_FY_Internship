import React, { useState } from 'react';
import './App.css';

function App() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(null);

  function startCounter() {
    let j = setInterval(() => {
      setStart((start) => start + 1);
    }, 1000);
    setStop(j);
  }

  function stopCounter() {
    clearInterval(stop);
    setStop(null);
  }

  return (
    <>
      <h1>Timer Counter</h1>
      <h3>Time: {start}</h3>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={()=>setStart(0)}>Reset</button>
    </>
  );
}

export default App;