import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import Card from '../Card/Card'
import {useSelector } from 'react-redux'


const Main = () => {

    const bands =useSelector((store) => store.bands.allBands)

    return (
        <div className='container-main'>    
           <ul >   
           {
                   bands.length > 0 ?
                   (
                       bands?.map(item =>(
                           
                           <Link key={item.id}  className='.container' to={`/${item.name}`}>
                               <Card title={item.name}  text={item.name} year={item.year} members={item.members}/>
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
