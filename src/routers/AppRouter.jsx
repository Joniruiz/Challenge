import {Routes ,Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import React from 'react'
import Login from '../components/Login/Login'
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {

    const  logIn = useSelector((store) => store.bands.islogged)

    return (
        <div>
            
                <Routes>
                    <Route path='/login' element = {!logIn ? <Login/> : <Navigate to ='/'/> } />
                    <Route path='*' element ={ (logIn ? <PrivateRouter/> : <Navigate to='/login'/>)} />
                </Routes>
            
        </div>
    )
}

export default AppRouter
