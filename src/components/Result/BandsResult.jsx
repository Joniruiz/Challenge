import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
import './BandsResult.css'


const BandsResult = () => {

    const result = useSelector((store) => store.bands.searchResult)
    


    return (
        <div className='container-bandsResult'>
            {
                result.length === 0 ? (<p>No hay resultados</p>) :
                (result.map(item =>(
                    
                    <Link to={`/${item.name}`}>
                    <Card key={item.id} title={item.name} />
                    </Link>
                    
                    
                )))
            }
        </div>
    )
}

export default BandsResult
