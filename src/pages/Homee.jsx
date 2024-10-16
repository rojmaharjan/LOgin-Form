import React, { useEffect } from 'react'
import Nav from '../component/Nav'
import { Link, useNavigate } from 'react-router-dom'
import UserDetail from '../component/UserDetail'

function Homee() {
    let usenavigate = useNavigate()
  useEffect(()=>{
    let getid= sessionStorage.getItem('id')
    if(getid=="" || getid==null){
      usenavigate('/login')

    }
  },[]) 
  return (
    <>
    {/* <Nav/>     */}
    <div className="container m-3 ">
        <div className="row d-flex">
            <div className="col bg-secondary rounded">
                <h1 className='bg-warning p-1 mt-2 text-center rounded'>Category</h1>

                <div className="lists text-light ">
                <Link to={"/userdetail"}> <h3 className='text-light'>UserDetail</h3></Link>
                <Link to={'/Productdetail'}><h3 className='text-light'>Products</h3></Link>
                </div>

            </div>            
            </div>
            </div>
            
      
    </>
  )
}

export default Homee
