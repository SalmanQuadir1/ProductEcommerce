import React, { useEffect } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const ProtectedRoutes = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('Login token');
        let user = localStorage.getItem('user');
        if (!login ) {
            navigate("/login");
        }
      
    }, [])


    return <div>
        <Component />
    </div>




}

export default ProtectedRoutes;