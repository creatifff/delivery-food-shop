import {CATEGORIES} from "../data/categories";


const Item = ({ item }) => {
    const {id, type, name, src } = item;

    return (
        <div className="filter__btn">
            <img src={src} alt="drinks"/>
            <p>{name}</p>
        </div>
    );
};

export default Item;