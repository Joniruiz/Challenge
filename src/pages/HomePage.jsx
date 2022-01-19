import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Filter from '../components/Filter/Filter'
import { useSelector } from 'react-redux'
import BandsResult from '../components/Result/BandsResult'


const HomePage = () => {

    const result = useSelector((store) => store.bands.searchResult)

    return (
        <>
            <Header/>
            <Filter/>
            {
                result?.length > 0 ? <BandsResult/> : <Main/>
            }
            
        </>
    )
}

export default HomePage

