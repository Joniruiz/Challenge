import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import {search} from '../../actions/actions'
import './Search.css'



const Search = () => {
    const [{keywords},handleInputChange,reset] = useForm({
        keywords:''
    })
   
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        if(keywords !== ''){
            dispatch(search(keywords));
            reset()
        }
        
    }
    return (
        <div className='container'>
            <form onSubmit={handleSearch}>
                <input className='input-search' type="search" name='keywords' onChange={handleInputChange} value={keywords} /><button className='btn-search' type='submit'>Enviar</button>
            </form>


        </div>

    )
}

export default Search
