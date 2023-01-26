const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        Food<span>House</span>
                    </div>
                    <nav className="header__nav">
                        <a href="#">Главная</a>
                        <a href="#menu">Меню</a>
                        <a href="#">Сервис</a>
                        <a href="#">О нас</a>
                    </nav>
                    <img src="src/assets/img/cart.svg" alt="cart"/>
                </div>
            </div>
        </header>
    )
}

export  default Header;