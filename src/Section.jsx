import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import UserDetail from './component/UserDetail'
import ProductDetail from './component/ProductDetail'
import Homee from './pages/Homee'
import Nav from './component/Nav'


function Section() {
  return (
    <>
     
    {/* <Moduls/> */}

    
    <Routes>
    
        <Route path="/userdetail" element={<UserDetail />} />
        <Route path="/" element={<Nav/>} />
        {/* <Route path="/" element={<Homee/>} /> */}
        <Route path="/Login" element={<Login/>}/>            
        <Route path="/ProductDetail" element={<ProductDetail/>}/>            
        </Routes>
        
      
    </>
  )
}

export default Section
