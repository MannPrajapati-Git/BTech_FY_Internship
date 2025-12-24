import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
     <Router>
      <Link to="/Home" >Home</Link> | <Link to="/About">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
     </Router>
    </>
  )
}

export default App;
