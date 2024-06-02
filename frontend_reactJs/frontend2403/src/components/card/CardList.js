import React from 'react';
import "../card/CardGroup.css"
import CardItem from './CardItem';



const CardList = () => {
    const cards = [
        {
            id: "1",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ7XnA4g4A6j4dKJmgXYocciMrXSgoEywhw&s',
            title: 'Card 1',
            desc: 'Description for card list 1'
        },
        {
            id: "2",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_aurt2wjbZQBW4MYpLZ8SfZt543Uaw-_HA&s',
            title: 'Card 2',
            desc: 'Description for card list 2'
        },
        {
            id: "3",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s',
            title: 'Card 3',
            desc: 'Description for card list 3'
        },
    ];
    return (
        <div className="card-container">
            {
                cards.map((item, index) => {
                    return <CardItem cardItem={item} key={item.id} />
                })}


        </div>
    );
}

export default CardList;