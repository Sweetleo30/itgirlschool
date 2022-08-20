import './TariffCard.scss';
import './turquoise.scss';
import './green.scss';
import './red.scss';
import './dark.scss';

export function TariffCard(props) {
    return (
        <div className={"card " + (props.isSelected ? "selected" : "")}>
            <div className={"card-item " + props.theme}>
                <span className="tariff">{props.tariff}</span>
            </div>
            <div className={"card-item " + props.theme}>
                <span className="price">руб</span>
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