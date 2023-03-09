import React from 'react'
import './css/sidebar.css';
import { BiHomeSmile, BiCaretDownSquare } from 'react-icons/bi'
import { CgShoppingBag, CgProductHunt } from 'react-icons/cg';
import { MdOutlineCategory, MdOutlineSwitchAccount } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <ul className='sidebar '>
        <li><BiHomeSmile className='mx-2' />Home</li>
        <li><CgShoppingBag className='mx-2' />Orders</li>
        <li><CgProductHunt className='mx-2' />Products <BiCaretDownSquare className='mx-3' id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/addProduct" class="dropdown-item" >Add Products</Link>
            <Link to="/editProduct" class="dropdown-item" >Update products</Link>
          </div>
        </li>
        <hr />
        <li><MdOutlineCategory className='mx-2' />Categories</li>
        <li><MdOutlineSwitchAccount className='mx-2' />Accounts</li>
      </ul>
    </>

  )
}

export default Sidebar