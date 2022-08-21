import './FlashcardTable.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export function FlashcardTable() {
    return (
        <div className="flashcard-table__container">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Кнопки</th>
                    </tr>
                </thead>
                <TableBody></TableBody>
            </table>
        </div>
    );
}

export function TableBody() {
    return (
        <tbody>
            <tr>
                <td scope="row">1</td>
                <td>olive</td>
                <td>[ ˈɒlɪv ]</td>
                <td>оливковый</td>
                <td>
                    <button className="bt-edit"><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="bt-delete"><FontAwesomeIcon icon={faTrashCan} /></button>
                </td>
            </tr>

            <tr>
                <td scope="row">1</td>
                <td>
                    <input type="text" className="form-control" name="word" value="" />
                </td>
                <td>
                    <input type="text" className="form-control" name="transcription" value="" />
                </td>
                <td>
                    <input type="text" className="form-control" name="translation" value="" />
                </td>
                <td>
                    <button className="bt-save">SAVE</button>
                    <button className="bt-edit"><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="bt-delete"><FontAwesomeIcon icon={faTrashCan} /></button>
                </td>
            </tr>
        </tbody>
    );
}




