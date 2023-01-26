const Menu = () => {
    return (<section className="menu" id="menu">
        <div className="container">
            <div className="section__title">Наше меню</div>
            <div className="title__line"></div>
            <div className="filter__grid">
                <div className="filter__btn active">
                    <img src="src/assets/img/salad.svg" alt="salad"/>
                    <p>Салаты</p>
                </div>
                <div className="filter__btn">
                    <img src="src/assets/img/drinks.svg" alt="drinks"/>
                    <p>Напитки</p>
                </div>
                <div className="filter__btn">
                    <img src="src/assets/img/burgers.svg" alt="burgers"/>
                    <p>Бургеры</p>
                </div>
                <div className="filter__btn">
                    <img src="src/assets/img/fries.svg" alt="fries"/>
                    <p>Закуски</p>
                </div>
                <div className="filter__btn">
                    <img src="src/assets/img/pizza.svg" alt="pizza"/>
                    <p>Пицца</p>
                </div>
                <div className="filter__btn">
                    <img src="src/assets/img/discount.svg" alt="discount"/>
                    <p>Акции</p>
                </div>
            </div>

            <div className="grid-section">
                <div className="items">
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (4).png" alt="item__image"/>

                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (1).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Греческий”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (2).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Тропический”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (3).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Японка”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>

                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (5).png" alt="item__image"/>
                        <div className="item_description">
                            <h3>Салат “Собери Сам”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (6).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Цезарь”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (7).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Оливье”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <img src="src/assets/web-site-icons/item__image (8).png" alt=""/>
                        <div className="item_description">
                            <h3>Салат “Летний”</h3>
                            <p className="weight">300 грамм - 1 порция</p>
                            <p className="info">36 - белков, 11 - жиров, 55 - углеводов</p>
                            <button className="item__purchase">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>

                <a href="#" target={"_blank"} className="items__show__all">Показать ещё</a>
            </div>


        </div>
    </section>)
}

export default Menu;