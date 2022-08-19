import './TariffCard.scss';

function TariffCard(props) {
    return (
        <div className="card">
            <div className="card-item">
                <span className="tariff">{props.tariff}</span>
            </div>
            <div className="card-item">
                <span>руб</span>
                <span className="price">{props.price}</span>
                <span>/мес</span>
            </div>
            <div className="card-item">
                <span className="speed">{props.speed}</span>
            </div>
            <div className="card-item">
                <span className="text">Объем включенного трафика не ограничен</span>
            </div>
        </div>
    );
}

export default TariffCard;
