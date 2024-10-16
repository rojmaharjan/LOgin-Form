import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Moduls from './Moduls'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Homee from '../pages/Homee'

function UserDetail() {
    let [title, setTitle] = useState([]) 
    let [showAddMod,setAddMod] = useState(false) 
    let [showEditMod,setEditMod] = useState("")
    let [search,setsearh]= useState("")
         
    
  useEffect(()=>{
    getalluser()
        

    },[title])  
    let getalluser= () =>{
      axios.get("http://localhost:3031/user")
      .then(response => setTitle(response.data))

    }  
    

    let handleDelete = (id)=>{
      // alert(id)
      axios.delete(`http://localhost:3031/user/${id}`)
      // axios.delete('http://localhost:3031/user'+ id, input_data)
    }
   
    
  return (
    <>
    <Nav/>
    <div className="container">
      <div className="row d-flex">
        <div className="col-2">
          <Homee/>
        </div>
        <div className="col-10">
        <div className="container p-3">
      <div className="row d-flex justify-content-start">
        <div className="col"><input type="text" onChange={(e)=>setsearh(e.target.value)} /></div>
        <div className="col ">
        <button type="button" className="btn btn-primary" onClick={()=>{setAddMod(true)}}> Add new </button>
        </div>
      </div>
    </div>

    <div className="container">
<table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {title.filter((item)=>item.name.toLowerCase().includes(search)) .map((item,index)=> (
      <tr key={item.id}>
      <th scope="row">{index + 1}</th>
      {/* <td>{item.id}</td> */}
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.gender}</td>
      <td>{item.age}</td>
      <td>{item.email}</td>
      
      <td>
        <button className='btn btn-primary' onClick={()=>{setAddMod(true); setEditMod(item.id)}}>Edit</button>  |  
        <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}  >Delete</button>
        

      </td>
    </tr>


    ))}    
    
  </tbody>
</table>

</div>
          
        </div>

      </div>
    </div>
    


        <Moduls 
        getedit = {showEditMod}
        showmodal={showAddMod} 
        getadduser={()=>{setAddMod(false); getalluser()}}
        />
        
        
     
      
    </>
  )
}

export default UserDetail
