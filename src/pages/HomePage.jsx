import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main'
import Filter from '../components/Filter'
import { useSelector } from 'react-redux'
import BandsResult from '../components/BandsResult'
import Card from '../components/Card/Card'

const HomePage = () => {

    const result = useSelector((store) => store.bands.searchResult)

    return (
        <>
            <Header/>
            <Filter/>
            {
                result.length > 0 ? <BandsResult/> : <Main/>
            }
            <Card/>
        </>
    )
}

export default HomePage

