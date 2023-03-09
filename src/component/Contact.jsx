import React from 'react'
import './styles/Producitem.css'
import Sidebar from './Admin/Sidebar';
import AddProduct from './Admin/AddProduct';

const contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <AddProduct></AddProduct>
        </div>

      </div>

    </>
  )
}

export default contact;