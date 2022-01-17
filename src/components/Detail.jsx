import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import CardDetail from './CardDetail/CardDetail'
import './Detail.css'


const Detail = () => {

    let {name} = useParams()
    const [bandDetail , setBandDetail] = useState('')
    const [albums , setAlbums] = useState('')

    useEffect(() => {
       fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${name}`)
        .then(res => res.json())
        .then(data => (setBandDetail(data)) )
    }, [])
 
   /*  useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId_like=${bandDetail.id}`)
        .then(res => res.json())
        .then(data => setAlbums(data))
    },[bandDetail])
    console.log('albunes',albums)
 */
    console.log(bandDetail)
    return (
        <div>
            {
                bandDetail.length === 0 ?
                ( 
                    <p>No tengo detalle</p>
                ) 
                :
                (
                    bandDetail.map(item => (
                    <CardDetail key={item.id} name={item.name}  genre={item.genreCode} year={item.year} country={item.country} members={item.members}/>
                )
                ))
            }
            <div className='btn-container'>

            <button className='btn-home'>

            <Link to={'/'}>Inicio</Link>
            </button>

            </div>
        </div>
    )
}

export default Detail
