import React from "react";
import Card from './Card'
import './CardList.css'

function CardList({ robots }) {
    return robots.map(robot =>
        <div key={robot.id} className='cardList'>
            <Card id={robot.id} name={robot.name} email={robot.email} />
        </div>
    )
}

export default CardList;