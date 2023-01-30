import React from "react";

const Item = ({ item }) => {
    const {id, category, name, src, weight, description } = item;

    return (
        <div key={id} className="item">
            <img src={src} alt={name}/>
            <div className="item_description">
                <h3>{name}</h3>
                <p className="weight">{weight}</p>
                <p className="info">{description}</p>
                <button className="item__purchase">
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default Item;