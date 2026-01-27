import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import axios from 'axios'   

function Display() {


    const [showData, setShowdata] = React.useState([])
    const token = localStorage.getItem('token')
    

    useEffect(()=>{
        
        axios.get('', { headers: { 'Authorization': `Bearer ${token}` } })
        .then((res) =>{
           setShowdata(res.data.student_list)
        } )
        
        .catch(error => console.log(error))



    })

    return (
        <>
            <Navbar />
            <h1 className="display-title">Available Data</h1>

<div className="display-table-wrapper">
  <table className="display-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {
        showData.map((value) => (
          <tr key={value.st_id}>
            <td>{value.st_id}</td>
            <td>{value.st_name}</td>
            <td>{value.st_email}</td>
            <td>{value.st_mobileno}</td>
            <td>{value.st_gender}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>  
        </>
    )
}

export default Display