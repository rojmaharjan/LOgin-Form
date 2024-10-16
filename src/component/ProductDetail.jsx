import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductModule from './ProductModule'
import Nav from './Nav'
import Homee from '../pages/Homee'

function ProductDetail() {
    let [title, setTitle] = useState([]) 
    let [showAddMod,setAddMod] = useState(false) 
    let [showEditMod,setEditMod] = useState("")
    let [search,setsearh]= useState("")    
    useEffect(()=>{
        getallpro()
            
    
        },[title])  
        let getallpro= () =>{
          axios.get("http://localhost:3031/productlist")
          .then(response => setTitle(response.data))
    
        }  
        
    
        let handleDelete = (id)=>{
          // alert(id)
          axios.delete(`http://localhost:3031/productlist/${id}`)
          // axios.delete('http://localhost:3031/user'+ id, input_data)
        }
  return (
    <>
    <Nav/>

    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Homee/>
        </div>
        <div className="col-md-10">
        <div className="container p-3">
      <div className="row">
        <div className="col"><input type="text" onChange={(e)=>setsearh(e.target.value)} /></div>
        <div className="col d-flex">
        <button type="button" className="btn btn-primary" onClick={()=>{setAddMod(true)}}>
Add new
</button>
        </div>
      </div>
    </div>

    {/* table for product details */}
    <div className="container">
        <div className="row justify-content-center">
            <div className="col">
                <div className="card">
                    <div className="card-header">Product Details</div>
                    <div className="card-body">
                        <table className="table table-bordered">
                        <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product description</th>
      <th scope="col">Product Price</th>      
    </tr>
  </thead>
  <tbody>
    {title.filter((item)=>item.Productname.toLowerCase().includes(search)) .map((item,index)=> (
      <tr key={item.id}>
      <th scope="row">{index + 1}</th>
      {/* <td>{item.id}</td> */}
      <td>{item.Productname}</td>
      <td><img style={{width:'100px',height:'100px'}} src={`${item.image}`}/> </td>
      <td>{item.description}</td>      
      <td>{item.price}</td>      
      
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
    </div>

        </div>
      </div>
    </div>
    
    
    
    <ProductModule 
        getedit = {showEditMod}
        showmodal={showAddMod} 
        getaddpro={()=>{setAddMod(false); getallpro()}}
        />

    </>
  )
}

export default ProductDetail
