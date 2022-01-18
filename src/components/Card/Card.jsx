import React from 'react'

import './Card.css'




const Card = ({ title }) => {

    return (
        <div className='card-container'>

        
        <div className="cards-list">

            <div className="card 1">
                <div className="card_image"> <img src={`./images/${title}.jpg`} /> </div>
                <div className="card_title title-white">
                    <p>{title}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
