import { useState } from 'react';

function CommentsForm({ addComments }) {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComments(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="spam__block">
            <textarea
                className="spam__comments"
                id="spam__comments"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите комментарий">
            </textarea>
            <button className="spam__button">Отправить</button>
        </form>
    )
}

export default CommentsForm;

// const [value, setValue] = useState('');

// <div className="spam__block-comments"></div>