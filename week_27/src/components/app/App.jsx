import data from '../../data/data.json';
// import Header from '../header/Header';
import TariffCard from '../card/TariffCard';
import '../../assets/styles/style.scss';
import './App.scss';

const tariffs = data;

function App() {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="main__container">
                    {/* <h2 className="title">Main!</h2> */}
                    {
                        tariffs.map((tariff) =>
                            <TariffCard
                                key={tariff.id}
                                tariff={tariff.tariff}
                                price={tariff.price}
                                speed={tariff.speed}>
                            </TariffCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
