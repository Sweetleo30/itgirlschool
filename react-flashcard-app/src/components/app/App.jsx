
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../assets/styles/style.css';
import './App.css';


function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="main">
                <h2 className="title">Main!</h2>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
