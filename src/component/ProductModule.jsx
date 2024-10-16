import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function ProductModule(props) {
    let showhide = props.showmodal

  useEffect(()=>{
    getEditData()


  },[showhide])

    // let [title, setTitle] = useState([])
  let [input_data,setinpData] = useState({
    Productname: '',
    image: '',
    description: '',
    price: ''
   

  })

 



    let setData=(e)=>{ 
      setinpData({...input_data, [e.target.name]:e.target.value})

    }
    let setimage=(e)=>{ 
      setinpData({...input_data, image: e.target.files[0]})

    }
    let getEditData = () => {
      if (props.getedit != "") {
        axios.get("http://localhost:3031/productlist/" + props.getedit)
          .then((res) => setinpData(res.data))
          .catch((err) => console.log(err.message))
      }
    }
  
    let saveData = () => {
      if (props.getedit == "") {
        axios.post('http://localhost:3031/productlist', input_data)
          .then((res) => {
            props.getaddpro()
            alert("Sucecssfully Save")
          })
          .catch((e) => alert(e))
        
      }
      else {
        axios.put('http://localhost:3031/productlist/'+props.getedit, input_data)
        .then((res) => {
          props.getaddpro()
          alert("Sucecssfully Modify Your Data")
        })
        .catch((e) => alert(e))
        
      }

      // axios.post("http://localhost:3031/user", input_data)
      // .then((res)=>{
      //   props.getaddpro()
      // })
        

    }
  return (
    <>
    <Modal show={showhide}>
        <Modal.Header closeButton onClick={()=>{props.getaddpro()}} >
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

<Modal.Body>
<div className='container p-3'>
  <label htmlFor="name" className="form-label">Product Title</label>
  <input type="text" id="uname" className="form-control" name='Productname'value={input_data.Productname} onChange={setData}/>  
  <label htmlFor="Image" className="form-label">Image</label>
  <input type="file" id="image"  className="form-control" name='image' value={input_data.image} onChange={setimage}/>  
  <label htmlFor="name" className="form-label">Product Description</label>
  <input type="text" id="uaddress" className="form-control" name='description' value={input_data.description} onChange={setData}/>  
  <label htmlFor="name" className="form-label">Product Price </label>
  <input type="text" id="uage" className="form-control" name='price' value={input_data.price} onChange={setData}/>  
   
  
</div>
</Modal.Body>
<Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.getaddpro()}}>
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

export default ProductModule
