import { Button, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles/Producitem.css';

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data...", loginData);
    axios
      .post("http://localhost:8089/api/authenticate", loginData, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then((resp) => {
        if (resp.data.token) {
          console.log(".......................",resp);
          localStorage.setItem("Login token", JSON.stringify(resp.data.token));
          localStorage.setItem("user", JSON.stringify(resp.data.user));
        
          toast.success("Login successfull !! ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => navigate("/products"), 2000);

        }
        
      }).catch((error) => {
        console.log(error);

        toast.error("Something went wrong" , {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => navigate("/login"), 2000);
      });


  }
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  }

  return (
    <>
      <div className="row m-4">

        <div className="card  col-sm-6  offset-sm-3 w-50 p-4  rg ">

          <Typography
            variant="h6"
            noWrap

            href="/"
            sx={{
              mx: 4,
              display: { xs: '', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.9rem',
              color: 'inherit',
              textDecoration: 'none',
            }} >Sign In</Typography>
          <Divider />
          <Divider />
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control mt-2" name="email" onChange={handleChange} placeholder="Enter email" />
            <input type="password" className="form-control mt-2" name="password" onChange={handleChange} placeholder="Enter Password" />
            <Button variant="contained" className="col-md-12 mt-2" color="success" type="submit">Sign In</Button>
            <Link to="/register" className="mt-2"><i className='fa fa-user-plus'></i>Register</Link>

          </form>
        </div>
      </div>


    </>
  )
}

export default Login;