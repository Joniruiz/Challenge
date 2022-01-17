import React,{useState,useEffect} from 'react'
import { useDispatch} from 'react-redux'
import {filter} from '../actions/actions'
import './Filter.css'

const Filter = () => {

    const dispatch = useDispatch()
    const [genre,setGenre] = useState('')
    

    useEffect(() => {
       fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?genreCode_like=${genre}`)
       .then(res => res.json())
       .then(data =>   dispatch(filter(data)) )  
    }, [genre])
 
    const handleGenre = function (e) {
        const opcion = e.target.value
        console.log(opcion)
        setGenre(opcion)
    }

    return (
        <div className='container-filter'>
            <form >
                <label className='label-filter'>Search for Genre</label>
            <select id='selectFilter' onClick={handleGenre} >
                <option value=''>All</option>
                <option value="rock" >Rock</option>
                <option value="rock-roll">Rock & Roll</option>
                <option value="hard-rock" >Hard Rock</option>
                <option value="grunge" >Grunge</option>
                <option value="power-metal" >Power Metal</option>
                <option value="heavy-metal" >Heavy Metal</option>
                <option value="black-metal" >Black Metal</option>
                <option value="progressive-metal" >Progressive Metal</option>  
            </select>
            </form>
            
        </div>
    )
    

}
export default Filter
