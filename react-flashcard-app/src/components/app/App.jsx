import './App.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FlashcardTable } from '../flashcard/FlashcardTable';
import { FlashcardContent } from '../flashcard/FlashcardContent';

function App() {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="main">
                <FlashcardTable></FlashcardTable>
                <FlashcardContent></FlashcardContent>
            </div>
            <Footer></Footer>
        </div >
    );
}

export default App;
