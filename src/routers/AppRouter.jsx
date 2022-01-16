import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Main from '../components/Main'
import Detail from '../components/Detail'
import React from 'react'

const AppRouter = () => {
    return (
        <div>
            
                <Routes>
                    <Route path= '/' element={<Main/>} />
                    <Route path='/:name' element={<Detail/>} />
                </Routes>
            
        </div>
    )
}

export default AppRouter
