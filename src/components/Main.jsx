import React from 'react'
import useFecth from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import Card from '../components/Card/Card'


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
                           
                           
                           <Link to={`/${item.name}`}>
                               <Card title={item.name} images={`../../../assets/images/Queen.jpg`} text={item.name} year={item.year}/>
                           </Link>
                           
                           
                       ))
                   )
               }
               
           </ul>
          
         
        </div>
    )
}

export default Main
