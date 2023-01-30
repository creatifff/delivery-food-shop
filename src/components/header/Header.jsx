import cartImg from '../../assets/img/cart.svg';
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
                    <img src={cartImg} alt="cart"/>
                </div>
            </div>
        </header>
    )
}

export  default Header;