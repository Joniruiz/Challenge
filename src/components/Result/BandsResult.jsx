import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
import './BandsResult.css'
import {cleanSearch} from '../../actions/actions'



const BandsResult = () => {

    const dispatch = useDispatch()
    const result = useSelector((store) => store.bands.searchResult)
    
    const clickHandlerSearchResults = () =>{
        dispatch(cleanSearch())
    }


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
                <button className='btn-home'>
                <Link to='/' onClick={() => clickHandlerSearchResults()}>Home</Link>
                </button>
        </div>
    )
}

export default BandsResult
