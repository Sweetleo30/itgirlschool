import tariffs from '../../data/data.json';
import { TariffCard } from '../card/TariffCard';
import '../../assets/styles/style.scss';
import './App.scss';

function App() {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="main__container">
                    {
                        tariffs.map((tariff) =>
                            <TariffCard
                                key={tariff.id}
                                tariff={tariff.tariff}
                                price={tariff.price}
                                speed={tariff.speed}
                                theme={tariff.theme}
                                isSelected={tariff.isSelected}>
                            </TariffCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
