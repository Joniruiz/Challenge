import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Search from '../Search/Search'
import {types} from '../../types/types'
import './Header.css'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        sessionStorage.removeItem('customer')
        dispatch({
            type : types.logout,
            payload : null
        })
        navigate('/login')
    }

    return (
        

            <nav className="bg-indigo-600 flex justify-between px-10 items-center py-6">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <Link to='/'>
                    <h1 className="text-white font-bold text-xl cursor-pointer">CHALLENGE</h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-8 font-bold text-white">
                    <Search />
                    <button className="cursor-pointer text-lg btn-logout" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            

        
    )
}


export default Header
