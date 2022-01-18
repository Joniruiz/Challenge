import React from 'react'
import {Link} from 'react-router-dom'
import './CardDetail.css'




const CardDetail = ({name,genre,year,country,members}) => {
    return (
     <>
     <section className='container-detail'>
        <img className='img-detail' src={`./images/${name}.jpg`} alt="" />
        <div className='container-info'>
        <div className=''>
            <h1>Band</h1>
            <p className='info'>{name}</p>
        </div>
        <div>
            <p>Genre</p>
            <p className='info'>{genre}</p>
        </div>
        <div>
            <span>Year of the band </span>
            <p className='info' >{year}</p>
        </div>
        <div>
            <p>Country</p>
            <p className='info' >{country}</p>
        </div>
        <ul className='members'>
            <li >Members</li>
            <ul className='info' >{members.map(item => (
                <li>{item.name}</li>
            ))}</ul>
            
        </ul>
        </div>
        </section>
     </>
    )
}

export default CardDetail
