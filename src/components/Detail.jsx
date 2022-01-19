import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import CardDetail from './CardDetail/CardDetail'
import {cleanSearch} from '../actions/actions'
import './Detail.css'
import Spinner from './Spinner/Spinner'



const Detail = () => {

    let {name} = useParams()
    const [bandDetail , setBandDetail] = useState('')
   
    const dispatch = useDispatch()

    useEffect(() => {
       fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${name}`)
        .then(res => res.json())
        .then(data => (setBandDetail(data)) )
    }, [])
 

    const clickHandlerSearchResults = () =>{
        dispatch(cleanSearch())
    }

    return (
        <div className=''>
            {
                bandDetail.length === 0 ?
                ( 
                    <Spinner/>
                ) 
                :
                (
                    bandDetail.map(item => (
                    <CardDetail key={item.id} name={item.name}  genre={item.genreCode} year={item.year} country={item.country} members={item.members}/>
                )
                ))
            }
            <div className='btn-container'>

            
            <Link to={'/'} onClick={()=> clickHandlerSearchResults()}>
            <button className='btn-home'>
                Home
            </button>
            </Link>
           
            </div>
        </div>
    )
}

export default Detail
