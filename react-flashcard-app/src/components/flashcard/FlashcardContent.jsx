import { Flashcard } from '../flashcard/Flashcard';
import words from '../../data/data.json';

import './Flashcard.scss';

export function FlashcardContent() {

    return (
        <div className="flashcard__container">
            {
                words.map((word) =>
                    <Flashcard
                        key={word.id}
                        word={word.english}
                        transcription={word.transcription}
                        translation={word.russian}>
                    </Flashcard>
                )
            }
        </div>
    );
}



