import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm'
import {search} from '../actions/search'




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
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" name='keywords' onChange={handleInputChange} value={keywords} /><button type='submit'>Enviar</button>
            </form>

        </div>
    )
}

export default Search
