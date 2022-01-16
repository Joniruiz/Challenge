import React,{useState,useEffect} from 'react'

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
        <div>
            <form >
            <select onClick={handleGenre} >
                <option value="rock" >rock</option>
                <option value="rock-roll">rock-roll</option>
                <option value="hard-rock" >hard-rock</option>
                
            </select>
            </form>
            <span>{genre}</span>
            {
                resultado.length === 0 ?(<p>No tengo datos</p>) : 
                (resultado.map(item => (
                    <li key={item.id}>{item.name}</li>
                )))
            }
        </div>
    )
    

}
export default Filter
