import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Calculator from '../Pages/Calculator'
import PrivateRoute from './PrivateRoute'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' 
            element={<PrivateRoute><Profile/></PrivateRoute> } />

            <Route path='/calculator' 
            element={<PrivateRoute><Calculator/></PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoute