import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/todolist">TodoList</Link>    |    <Link to="/addTodo">AddTodo</Link>
        </div>
    )
}

export default Navbar