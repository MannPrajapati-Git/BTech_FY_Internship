import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <Link to="/">TodoList</Link>  <Link to="/addTodo">addTodo</Link>
        </div>
    )
}

export default Navbar