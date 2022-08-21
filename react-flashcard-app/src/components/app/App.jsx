
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FlashcardTable } from '../flashcard/FlashcardTable';

import './App.scss';


function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="main">
                <h2 className="title">Main!</h2>

                <FlashcardTable></FlashcardTable>


            </div>
            <Footer></Footer>
        </div >
    );
}

export default App;
