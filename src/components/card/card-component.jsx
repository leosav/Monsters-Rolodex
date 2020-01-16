import React from 'react';
import './card.style.css';


export const Card = ({monster}) => {
    return(
        <div className='card-container'>
        <img alt='monsters' src={`https://robohash.org/${monster.id}?set=set3&size=200x200`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
}

export default Card;