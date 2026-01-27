import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function AddTodo() {
    const [title,setTitle] = React.useState("")
    const [detail,setDetail] = React.useState("")

    const saveData = () => {

        var myformdata = new FormData()
        myformdata.append("todo_title",title)
        myformdata.append("todo_details",detail)

        axios.post("",myformdata)
        .then((res)=>{
            if(res.data.flag == '1'){
                alert(res.data.message)
            }

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <Navbar />
            <h1>Add Todo</h1>
            Title : <input type="text" onChange={(e)=>setTitle(e.target.value)}/> <br />
            <br />
            Details : <input type="text" onChange={(e)=>setDetail(e.target.value)}/> <br />
            <br />
            <input type="button" value="Add Todo" onClick={saveData} />
        </div>
    )
}

export default AddTodo