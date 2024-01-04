import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext';


function PrivateRoute({children}) {

  const{isAuth} = useContext(AuthContext)
  console.log(isAuth);

  if(!isAuth){
    return <Navigate to="/login"></Navigate>
  }

  return children;
}

export default PrivateRoute;
