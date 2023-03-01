import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { Badge, Button, Typography } from '@mui/material';
import '../App.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BiLogOutCircle } from 'react-icons/bi';
import { RiMapPinUserFill } from 'react-icons/ri';


const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    const token = JSON.parse(localStorage.getItem('Login token'));
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("userFullDetail....", user);
   

    const navigate = useNavigate();


    const handleLogout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8089/api/logout").then((response) => {
            console.log(response);
            toast.success("Logout successfull !!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.removeItem("Login token");
            localStorage.removeItem("user");

            navigate("/login");




        }).catch((error) => {
            toast.success("Logout Unsuccessfull !!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })


    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light  py-3 shadow-sm  w-100 position-fixed " style={{ zIndex: "99", top: "0" }}>
                <div class="container-fluid">
                    <AddBusinessOutlinedIcon color="secondary" fontSize="large" />
                    <Typography
                        className='nav-link'
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mx: 2,
                            display: { xs: '', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            letterSpacing: '.6rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ASTE STORE
                    </Typography>
                    {/* <Link to="/" class="navbar-brand text-dark fw-bold fs-4 mx-2" href="#">ASTE STORE </Link> */}
                    <button class="navbar-toggler text-dark bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active text-dark " aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/products" class="nav-link text-dark" href="#">Products</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/about" class="nav-link text-dark " href="#" tabindex="-1" aria-disabled="true">About </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link text-dark " href="#" tabindex="-1" aria-disabled="true">Contact </Link>
                            </li>
                           



                        </ul>

                        <div className=" buttonss w-20 p-1  d-flex  text-center">
                            {token == null && (
                                <Link to="/login" className=""><i className='fa fa-sign-in me-1'></i>Login</Link>

                            )}
                            {token != null && (
                                <>
                                    <div className="dropdown ">
                                        <Button variant="contained" color="success" className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <RiMapPinUserFill size={25} />
                                        </Button>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link class="dropdown-item" href="#">{user.firstName + " " + user.lastName}</Link>
                                            <Link class="dropdown-item" href="#">{user.username}</Link>
                                            <Link class="dropdown-item" href="#">Role:{user.role}</Link>
                                            <div class="dropdown-divider"></div>
                                            
                                            <Link class="dropdown-item" to={'/addProduct'}>AddProduct</Link>


                                            <div class="dropdown-divider"></div>
                                            <Link className="dropdown-item" onClick={handleLogout} href="/#"><BiLogOutCircle size={20} />&nbsp;Logout</Link>
                                       
                                        </div>
                                    </div>

                                    {/* <Button variant="contained" onClick={handleLogout} color="success" className=""><BiLogOutCircle size={20} />&nbsp;Logout</Button> */}
                                </>

                            )}

                            <Link to="/cart" className="  ms-4">
                                <Badge badgeContent={state.length} color="secondary">
                                    <LocalMallIcon color="purple" />
                                </Badge>
                            </Link>

                        </div>



                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;

