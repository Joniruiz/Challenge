import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'

const Detail = () => {

    let {name} = useParams()
    const [bandDetail , setBandDetail] = useState('')
    

    useEffect( async() => {
       await fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${name}`)
        .then(res => res.json())
        .then(data => setBandDetail(data))
    }, [])

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
                    <li key={item.id}>{item.name}-{item.country}</li>
                )
                ))
            }
            <Link to={'/'}>Inicio</Link>
        </div>
    )
}

export default Detail
