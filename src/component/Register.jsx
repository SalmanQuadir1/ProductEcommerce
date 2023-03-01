import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles/Producitem.css';
const initialData={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone:''
}
const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState(initialData)

  const getData = (e) => {
    console.log('register', e.target.value);
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('register data', registerData);
    axios
      .post("http://localhost:8089/api/register", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        // localStorage.setItem("token", JSON.stringify(res.data.token));
        console.log(res);
        toast.success("User Registered successfully" + " " + res.status, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => navigate("/login"), 2000);

        setRegisterData(initialData);
      }).catch((error)=>{
        console.log(error);
        toast.error("Something went wrong " + " " + error.status, {
          position: "top-right",
          autoClose: 5000,
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
      <div className="row mb-5">

        <div className="card  col-md-6 offset-md-3 w-50 p-4 rg">
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
            }} >REGISTER</Typography>

          <form className="" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={registerData.firstName} className="form-control mt-2" placeholder="Enter FirstName" onChange={getData} />
            <input type="text" name="lastName" value={registerData.lastName} className="form-control mt-2" placeholder="Enter LastName" onChange={getData} />
            <input type="email" name="email"value={registerData.email} className="form-control mt-2" placeholder="Enter Email" onChange={getData} />
            <input type="number" name="phone"value={registerData.phone} className="form-control mt-2" placeholder="Enter Phone No." onChange={getData} />
            <input type="password" name="password"value={registerData.password} className="form-control mt-2" placeholder="Enter Password" onChange={getData} />
            <input type="text" name="confirmPassword"value={registerData.confirmPassword} className="form-control mt-2" placeholder="Confirm Password" onChange={getData} />
            <button className='btn btn-outline-success mt-2'>Sign up </button>
          </form>
        </div>
      </div>


    </>
  )
}
export default Register;
