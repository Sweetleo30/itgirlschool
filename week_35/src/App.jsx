import './App.css';
import { useState } from 'react'
import Comments from './Comments'
import CommentsForm from './CommentsForm'

function App() {
  const [comments, setComments] = useState([])

  const addComments = (userInput) => {
    userInput = userInput.replace(/viagra/ig, "***")
    userInput = userInput.replace(/XXX/ig, "***")

    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        comment: userInput,
      }
      setComments([newItem, ...comments])
    }
  }

  return (
    <div className="App">
      <section className="spam__container">
        <h1 className="spam__title title">Интерфейс для анонимных комментариев</h1>
        <div className="spam__block">
          <div className="spam__block-comments">
            {comments.map((comment) => {
              return (
                <Comments
                  comment={comment}
                  key={comment.id}
                />
              )
            })}
          </div>
          <CommentsForm addComments={addComments} />
        </div>
      </section>
    </div>
  );
}

export default App;
