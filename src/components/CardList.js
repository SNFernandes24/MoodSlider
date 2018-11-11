import React from 'react';
import Card from './Card';
import './CardList.css'
//handles listing all the individual movie cards
const CardList = ({movies}) => {
    return (
        <div className="cardList">
            {
                movies.map((user, i) => {
                    return(
                        // sends information to each individual card as props
                        <Card
                            key={i}
                            img={movies[i].path}
                            name={movies[i].name}
                        />
                    );
                })
            }
        </div>
    );   
}

export default CardList;