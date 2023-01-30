import React from 'react';

const FilterItem = ({item}) => {
    const {id, src, name, type} = item;

    return (
        <div key={id} className="filter__btn">
            <img src={src} alt={name}/>
            <p>{name}</p>
        </div>
    );
};

export default FilterItem;