import React from 'react'
import useFecth from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const Main = () => {

    let url = `https://my-json-server.typicode.com/improvein/dev-challenge/bands`
    
    
    const {bands,loading} = useFecth(url)

    return (
        <div>
           <ul>
               {
                   loading ? (
                       <p>Cargando</p>
                   ) :
                   (
                       
                       bands.map(item =>(
                           <li key={item.id}>{item.name}
                           <Link to={`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${name}`}></Link>
                           
                           </li>
                       ))
                   )
               }
           </ul>

        </div>
    )
}

export default Main
