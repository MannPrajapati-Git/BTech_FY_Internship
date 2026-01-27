import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import axios from 'axios'

function TodoList() {

    const [data,setData] = React.useState([]);
   

 useEffect(()=>{

    axios.get("")
    .then(res=>{
        setData(res.data.todo_list)  
    })
    .catch((err)=>console.log(err))
    
 })

 const todoDelete=()=>{
    
    return ()=>{
        axios.get("")  
        .then(res=>{
            data.splice(res.data.todo_list.todo_id,1);
            setData(res.data)  
        })
        .catch((err)=>console.log(err))
    }


 }

 const todoEdit=()=>{
    
 }

    return (
        <>
            <Navbar />
            <h1>Todo List</h1>
            <table border={2} cellPadding={10} cellSpacing={3} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                data.map((value,index)=>{
                    return(<tr key={index}>
                        <td>{value.todo_id}</td>
                        <td>{value.todo_title}</td>
                        <td>{value.todo_details}</td>
                        <td> <input type="button" value="Edit" onClick={todoEdit}/> <input type="button" value="Delete"  onClick={todoDelete(value.todo_id)} /> </td>
                    </tr>)
                })}


                </tbody>
            </table>



            
        </>
    )
}

export default TodoList
