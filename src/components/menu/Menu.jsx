import {PRODUCTS} from "../../data/products.jsx";
import Item from "../../item/Item.jsx";
import {CATEGORIES} from "../../data/categories.js";
import FilterItem from "../../FilterItem/FilterItem.jsx";

const Menu = () => {
    return (
        <section className="menu" id="menu">
        <div className="container">
            <div className="section__title">Наше меню</div>
            <div className="title__line"></div>
            <div className="filter__grid">
                {CATEGORIES.map((item) => <FilterItem key={item.id} item={item}/>)}

                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/salad.svg" alt="salads"/>*/}
                {/*    <p>Салаты</p>*/}
                {/*</div>*/}
                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/drinks.svg" alt="drinks"/>*/}
                {/*    <p>Напитки</p>*/}
                {/*</div>*/}
                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/burgers.svg" alt="burgers"/>*/}
                {/*    <p>Бургеры</p>*/}
                {/*</div>*/}
                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/fries.svg" alt="fries"/>*/}
                {/*    <p>Закуски</p>*/}
                {/*</div>*/}
                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/pizza.svg" alt="pizza"/>*/}
                {/*    <p>Пицца</p>*/}
                {/*</div>*/}
                {/*<div className="filter__btn">*/}
                {/*    <img src="src/assets/img/discount.svg" alt="discount"/>*/}
                {/*    <p>Акции</p>*/}
                {/*</div>*/}
            </div>
            <div className="grid-section">
                <div className="items">
                    {PRODUCTS.map((item) => <Item key={item.id} item={item}/>)}
                </div>

                <a href="#" className="items__show__all">Показать ещё</a>
            </div>
        </div>
    </section>
    )
}

export default Menu;