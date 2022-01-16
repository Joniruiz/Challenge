import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const BandsResult = () => {

    const result = useSelector((store) => store.bands.searchResult)
    console.log(result)


    return (
        <div>
            {
                result.length === 0 ? (<p>No hay resultados</p>) :
                (result.map(item => (
                    <a href="">

                        <li key={item.id}>{item.name}</li>

                    </a>
                )))
            }
        </div>
    )
}

export default BandsResult
