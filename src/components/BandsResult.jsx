import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const BandsResult = () => {

    const result = useSelector((store) => store.bands.searchResult)
    


    return (
        <div>
            {
                result.length === 0 ? (<p>No hay resultados</p>) :
                (result.map(item =>(
                    <li key={item.id}>
                    <Link to={`/${item.name}`}>
                        {item.name}-{item.country}-{item.year}
                        
                    </Link>
                    
                    </li>
                )))
            }
        </div>
    )
}

export default BandsResult
