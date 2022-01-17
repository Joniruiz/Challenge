import {Routes ,Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import React from 'react'
import Login from '../components/Login/Login'
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {

    const  logeado = useSelector((store) => store.bands.islogged)

    return (
        <div>
            
                <Routes>
                    <Route path='/login' element = {!logeado ? <Login/> : <Navigate to ='/'/> } />
                    <Route path='*' element ={ (logeado ? <PrivateRouter/> : <Navigate to='/login'/>)} />
                </Routes>
            
        </div>
    )
}

export default AppRouter
