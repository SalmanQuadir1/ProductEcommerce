import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './component/Admin/AddProduct';
import EditProduct from './component/Admin/EditProduct';
import Home from './component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from './component/Admin/AddCategory';
import Navbar from './component/Navbar';
import About from './component/About';
import Products from './component/Products';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import Product from './component/Product';
import Footer from './component/Footer';
import UpdateProduct from './component/Admin/UpdateProduct';
import Sidebar from './component/Admin/Sidebar';
import ProtectedRoutes from './ProtectedRoutes';
import Checkout from './component/Checkout';





function App() {
  return (
    <>
   <Navbar/>
   <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/AddProduct' element={<ProtectedRoutes Component={AddProduct}></ProtectedRoutes>}></Route>
        <Route exact path='/updateProduct' element={<UpdateProduct/>}></Route>
        <Route exact path='/EditProduct' element={<EditProduct/>}></Route>
        <Route exact path='/AddCategory' element={<AddCategory/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/product/:id' element={<Product/>}></Route>
        <Route exact path='/sidebar' element={<Sidebar/>}></Route>
        <Route exact path='/checkout' element={<Checkout/>}></Route>


      </Routes> 
  

      <ToastContainer/>
      
      <Footer/>
    </>
  );
}

export default App;
