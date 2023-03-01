import React, { useEffect } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const {Component}=props;
    const navigate = useNavigate();
   useEffect(()=>{
    let login = localStorage.getItem('Login token');
    let userRole=localStorage.getItem('user');
    if (!login && !userRole.role=='Admin') {
        navigate("/login");
    }
   },[])

    
    return <div>
        <Component/>
    </div>




}

export default ProtectedRoutes;