import './Hero.css';

function Hero(props) {
    return (
        <div className="gallery__content-block">
            <div className="gallery__photo-block">
                <img className="photo" src={props.photo} alt=""></img>
            </div>
            <div className="gallery__text-block text-block">
                <div className="text-block__item">
                    <span className="name">{props.name}</span>
                </div>
                <div className="text-block__item">Вселенная:
                    <span className="universe">{props.universe}</span>
                </div>
                <div className="text-block__item">Альтер эго:
                    <span className="alter-ego">{props.alterEgo}</span>
                </div>
                <div className="text-block__item">Род деятельности:
                    <span className="occupation">{props.occupation}</span>
                </div>
                <div className="text-block__item">Суперсилы:
                    <span className="superpowers">{props.superpowers}</span>
                </div>
                <div className="text-block__item">Подробнее:
                    <p className="more">{props.more}</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
