import React, { useEffect } from 'react'
import useFecth from '../../hooks/useFetch'
import {Link} from 'react-router-dom'
import './Main.css'
import Card from '../Card/Card'
import { useDispatch,useSelector } from 'react-redux'
import {allBands} from '../../actions/actions'



const Main = () => {

    const dispatch = useDispatch()

    const bands =useSelector((store) => store.bands.allBands)
    console.log(bands)

    useEffect (() =>{
        dispatch(allBands())
    },[])

    console.log('genero de las bandas ',bands.genreCode)

    return (
        <div className='container-main'>
            
           <ul >
               <p className='aca'>aca</p>
               {
                  
                   (
                       
                       bands.map(item =>(
                           
                           <Link className='.container' to={`/${item.name}`}>
                               <Card key={item.id} title={item.name}  text={item.name} year={item.year} members={item.members}/>
                           </Link>
                           
                           
                       ))
                   )
               }
               
           </ul>
          
         
        </div>
    )
}

export default Main
