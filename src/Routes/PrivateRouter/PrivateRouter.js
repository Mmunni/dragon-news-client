/* 
1. only allow aunthentic user vist this router
2.
3.before login user whrer go after login go there
*/ 

import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {

    const {user, loader} = useContext(AuthContext);

    const location = useLocation();
    if(loader){
       return <Spinner className='text-center' animation="grow" variant="info" />
    }

    if(!user){
        return <Navigate to ='/login' state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRouter;