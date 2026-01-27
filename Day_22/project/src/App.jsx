import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <TodoList /> }/>
          <Route path="/todolist" element={ <TodoList /> }/>
          <Route path="/addTodo" element={<AddTodo />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
