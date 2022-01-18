import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import Card from '../Card/Card'
import { useDispatch,useSelector } from 'react-redux'
import {allBands} from '../../actions/actions'


const Main = () => {

    const dispatch = useDispatch()

    const bands =useSelector((store) => store.bands.allBands)
    
    useEffect (() =>{
        dispatch(allBands())
        
    },[])

    return (
        <div className='container-main'>    
           <ul >   
           {
                   bands.length > 0 ?
                   (
                       bands?.map(item =>(
                           
                           <Link className='.container' to={`/${item.name}`}>
                               <Card key={item.id} title={item.name}  text={item.name} year={item.year} members={item.members}/>
                           </Link>
                           
                           
                       ))
                   ):
                   <p>I dont have band's</p>
               }
           </ul>
               
        </div>
    )
}

export default Main
