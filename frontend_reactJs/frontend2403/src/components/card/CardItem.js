import React from "react";

const CardItem = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card__img">
                    <img src={props?.cardItem?.img} />
                </div>
                <div className="card_content">
                    <h1 className="card__title">{props?.cardItem?.title}</h1>
                    <p className="card-desc">{props?.cardItem?.desc}</p>
                </div>
            </div>

        </div>
    );
}

export default CardItem;