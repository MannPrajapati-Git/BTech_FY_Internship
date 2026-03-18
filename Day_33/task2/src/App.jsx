// CRUD

import React from "react"
import {Router, Route, Routes, BrowserRouter} from "react-router-dom"
import Auth from "./components/Auth"
import Home from "./components/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
