import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";

import React from 'react'

const AppRouter = () => {
    return (
        <div>
            
                <Routes>
                    <Route path='/:name' element={<Detail/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
