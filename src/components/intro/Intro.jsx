import introImg from '../../assets/img/intro.svg';

const Intro = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__content">
                        <p className="subtitle">Экспресс-доставка от Яндекс.Еды</p>
                        <h1>Быстро и вкусно<span>.</span></h1>
                        <p>Сеть быстрого питания #1 в Казани</p>
                        <div className="btn__block">
                            <button className="intro__btn">Сделать заказ</button>
                            <p>бесплатная доставка от 500 рублей</p>
                        </div>
                    </div>
                    <img src={introImg} alt="intro"/>
                </div>
            </div>
        </div>
    )
}

export default Intro;