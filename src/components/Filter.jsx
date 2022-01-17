import React,{useState,useEffect} from 'react'
import './Filter.css'

const Filter = () => {

    const [genre,setGenre] = useState('pepe')
    const [resultado , setResultado] = useState('')

    useEffect(() => {
       fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?genreCode_like=${genre}`)
       .then(res => res.json())
       .then(data => setResultado(data) )
       
       
    }, [genre])

    const handleGenre = function (e) {
        const opcion = e.target.value
        console.log(opcion)
        setGenre(opcion)
    }

  
    return (
        <div className='container-filter'>
            <form >
            <select id='selectFilter' onClick={handleGenre} >
                <option value="null" >All</option>
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
            {
                resultado.length === 0 ?(null) : 
                (resultado.map(item => (
                    <li key={item.id}>{item.name}</li>
                )))
            }
        </div>
    )
    

}
export default Filter
