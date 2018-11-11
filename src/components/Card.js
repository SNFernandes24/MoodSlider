import React from 'react';
import './Card.css';
//handles individual cards
const Card = ({name, img}) => {
    return(
        <div className="cardContainer">
            {/* images uploaded in public folder, src from xml */}
            <img className="moviePoster" alt="Movie Poster" src={img} />
            <div className="nameContainer">
                <h2 className="movieName">{name}</h2>
            </div>
        </div>
    );
}

export default Card;