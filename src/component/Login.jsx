import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Moduls from './Moduls'

function Login() {
  let [title, setTitle] = useState([])
  let [showAddMod,setAddMod] = useState(false)
  let [showEditMod,setEditMod] = useState("")
  let [user_id, setuser_id]=useState()
  let [password, setpassword]=useState()
  let [userdata,setuserdata] = useState([])
  let usenavigate =useNavigate()

  useEffect(()=>{

    sessionStorage.clear()
    
  },[])
  let getalluser= () =>{
    axios.get("http://localhost:3031/user")
    .then(response => setTitle(response.data))

  } 

  let handlesummit = (e)=>{

    
    axios.get("http://localhost:3031/user")
    .then((res)=>setuserdata(res.data))
    .catch((err)=>console.log(err.message))

    let getdata = userdata.find((ud)=>ud.email==user_id && ud.password==password)    
    
    if(Object.keys(getdata).length>=0){
      let getid= sessionStorage.setItem('id',getdata.id)

      usenavigate('/')
    }
  
    
    
  }
  return (
    <>
   <div className="container w-50 bg-warning mt-3 p-3 rounded">
   
  <div className="mb-3">
    <label htmlFor="exampleInputText" className="form-label" > <i className="fa-solid fa-user" /> UserName</label>
    <input type="text" className="form-control" id="login" onChange={(e)=>setuser_id(e.target.value)}  />    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fa-solid fa-key" /> Password</label>
    <input type="password" className="form-control" id="passowrd" onChange={(e)=>setpassword(e.target.value)}  />
  </div>
  
  <div className="floating">
  <button  className="btn btn-primary" onClick={()=>handlesummit()}>Login</button>
  <p>Don't have Account? <button className="btn btn-primary" onClick={()=>{setAddMod(true)}} >Register</button> here</p>
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

export default Login
