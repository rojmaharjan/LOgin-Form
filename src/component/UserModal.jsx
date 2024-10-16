import React from 'react'

function UserModal({hide}) {
  return (
    <>
    <div className="container border border-danger w-50 p-3">
        <div className="row text-end">
            <div className="col"><h2 className='btn btn-danger' onClick={hide}>X</h2></div>
        </div>
      <div className="title"><h3>User</h3></div>
      <div className="py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis expedita libero dicta ad eaque, dolore mollitia deleniti, natus, obcaecati rerum quidem! Suscipit voluptate reprehenderit quibusdam quae impedit odit corrupti.</div>
      <button className="btn btn-success" onClick={hide}> close</button>
    </div>
      
    </>
  )
}

export default UserModal
