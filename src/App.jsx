import React, { useState } from 'react'
import Nav from './component/Nav'
import UserDetail from './component/UserDetail'
import UserModal from './component/UserModal'
import { Modal,Button } from 'react-bootstrap'
import Moduls from './component/Moduls'
import Section from './Section'


function App() {
  let [show,setshow] = useState(false)
  let handleShow = ()=>{
    setshow(true)
  }
  let handleClose = ()=>{
    setshow(false)
  }
   
    
  return (
    <>
   {/* <Nav/> */}
    <Section/>
    {/* <div className="container py-5">
      <div className="row">
        <div className="col">
    <button className='btn btn-primary' onClick={handleShow}> Add</button>

        </div>
      </div>
    </div> */}


    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}




      
    </>
  )
}

export default App
