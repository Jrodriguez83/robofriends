import React from "react";
import './Card.css'

function Card(props) {
    const {name, email, id} = props;
    return (
        <div className='card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='photo1' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;