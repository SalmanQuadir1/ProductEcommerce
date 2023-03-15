import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Address from '../component/Address'
import AddCategory from '../component/Admin/AddCategory'
import AddProduct from '../component/Admin/AddProduct'
import AdminHome from '../component/Admin/AdminHome'
import EditProduct from '../component/Admin/EditProduct'
import Sidebar from '../component/Admin/Sidebar'
import UpdateProduct from '../component/Admin/UpdateProduct'
import Cart from '../component/Cart'
import Checkout from '../component/Checkout'
import Home from '../component/Home'
import Login from '../component/Login'
import Product from '../component/Product'
import Products from '../component/Products'
import Register from '../component/Register'
import ProtectedRoutes from '../ProtectedRoutes'
import Contact from '../component/Contact'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/AddProduct' element={<ProtectedRoutes Component={AddProduct}></ProtectedRoutes>}></Route>
                <Route exact path='/updateProduct' element={<ProtectedRoutes Component={UpdateProduct}></ProtectedRoutes>}></Route>
                <Route exact path='/EditProduct' element={<ProtectedRoutes Component={EditProduct}></ProtectedRoutes>}></Route>
                <Route exact path='/AddCategory' element={<AddCategory />}></Route>
                <Route exact path='/products' element={<Products />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route exact path='/cart' element={<Cart />}></Route>
                <Route exact path='/product/:id' element={<Product />}></Route>
                <Route exact path='/sidebar' element={<Sidebar />}></Route>
                <Route exact path='/checkout' element={<Checkout />}></Route>
                <Route exact path='/address' element={<Address />}></Route>
                <Route exact path='/adminHome' element={<AdminHome />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes