import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import VerifyReq from '../Pages/VerifyReq/VerifyReq';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    if (!user.emailVerified) return <VerifyReq></VerifyReq>

    return children
};

export default PrivateRoute;