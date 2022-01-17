import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'


const PrivateRouter = () => {
    return (
        <div>         
            <Routes>
                    <Route path= '/' element={<HomePage/>} />
                    <Route path='/:name' element={<DetailPage/>} />                    
            </Routes>
        </div>
    )
}

export default PrivateRouter
