import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'

const Detail = () => {

    let name = useParams()
    const [name , setName] =useState('')

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${name}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>

            
        </div>
    )
}

export default Detail
