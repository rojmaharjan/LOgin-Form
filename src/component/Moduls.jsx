import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Moduls(props){
  // let [showhide,setshowhide] = useState()
  // setshowhide(props.showmodal);
  let showhide = props.showmodal

  useEffect(()=>{
    getEditData()


  },[showhide])

    // let [title, setTitle] = useState([])
  let [input_data,setinpData] = useState({
    name: '',
    gender: '',
    address: '',
    age: '',
    email: '',
    password: '',

  })

  let [error,seterror]=useState({})

 
  // useEffect(()=>{
  // axios.get("http://localhost:3031/user")
  //     .then(response => setTitle(response.data))

      

  //   },[title])


    let setData=(e)=>{ 
      setinpData({...input_data, [e.target.name]:e.target.value})

    }
    let getEditData = () => {
      if (props.getedit != "") {
        axios.get("http://localhost:3031/user/" + props.getedit)
          .then((res) => setinpData(res.data))
          .catch((err) => console.log(err.message))
      }
    }
  
    let saveData = () => {
      let dataValidation = {}
        if(!input_data.name){
          dataValidation.name = "Name is required"
        }
        else if(input_data.name.length <=3){
          datavalidation.name = "Name should be more than 3 character"
        }        
        if(!input_data.gender){
          dataValidation.gender = "Gender is required"
        }
        if(!input_data.address){
          dataValidation.address = "address is required"
        }
        if(!input_data.age){
          dataValidation.age = "age is required"
        }
        if(!input_data.email){
          dataValidation.email = "email is required"
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_data.email)){
          dataValidation.email = "Should contain @gmail.com"
        }
        if(!input_data.password){
          dataValidation.password = "password is required"
        }





        seterror (dataValidation)

        if(Object.keys(dataValidation).length==0)
          {
            if (props.getedit == "") {
                axios.post('http://localhost:3031/user', input_data)
                  .then((res) => {
                    props.getadduser()
                    alert("Sucecssfully Save")
                  })
                  .catch((e) => alert(e))
                
              }
              else {
                axios.put('http://localhost:3031/user/'+props.getedit, input_data)
                .then((res) => {
                  props.getadduser()
                  alert("Sucecssfully Modify Your Data")
                })
                .catch((e) => alert(e))
                
              }              
          }







      // 

      // axios.post("http://localhost:3031/user", input_data)
      // .then((res)=>{
      //   props.getadduser()
      // })
        

    }
  return (
    <>
    
<Modal show={showhide}>
        <Modal.Header closeButton onClick={()=>{props.getadduser()}}>
          <Modal.Title>Register User</Modal.Title>
        </Modal.Header>

<Modal.Body>
<div className='container p-3'>
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" id="uname" className="form-control" name='name'value={input_data.name} onChange={setData}/> 
  {error.name && <span className='text-danger'>{error.name} </span>} <br></br>
  <label htmlFor="name" className="form-label">Gender</label>
  <input type="text" id="ugender" className="form-control" name='gender' value={input_data.gender} onChange={setData}/> 
  {error.gender && <span className='text-danger'>{error.gender} </span>} <br></br> 
  <label htmlFor="name" className="form-label">Address</label>
  <input type="text" id="uaddress" className="form-control" name='address' value={input_data.address} onChange={setData}/>  
  {error.address && <span className='text-danger'>{error.address} </span>} <br></br>
  <label htmlFor="name" className="form-label">Age</label>
  <input type="text" id="uage" className="form-control" name='age' value={input_data.age} onChange={setData}/> 
  {error.age && <span className='text-danger'>{error.age} </span>} <br></br> 
  <label htmlFor="name" className="form-label">Email</label>
  <input type="email" id="uemail" className="form-control" name='email' value={input_data.email}  onChange={setData}/> 
  {error.email && <span className='text-danger'>{error.email} </span>} <br></br>
  <label htmlFor="name" className="form-label">Password</label>
  <input type="password" id="upass" className="form-control" name='password' value={input_data.password}  onChange={setData}/> 
  {error.password && <span className='text-danger'>{error.password} </span>} <br></br>
  
</div>
</Modal.Body>
<Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.getadduser()}}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        
    </>
  )
}

export default Moduls
