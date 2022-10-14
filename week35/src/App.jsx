import './App.css';
import { useState } from 'react';
import Comments from './Comments';
import CommentsForm from './CommentsForm';



function App() {

  const [comments, setComments] = useState([]);

  const addComments = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.rondom().toString(36).substr(2, 9),
        comment: userInput,
        complete: false
      }
      setComments([...comments, newItem])
    }
  }

  const removeComments = () => {

  }

  const handleToggle = () => {

  }

  return (
    <div className="App">
      <section className="spam__container">
        <h1 className="spam__title title">Интерфейс для анонимных комментариев: {comments.length}</h1>
        <CommentsForm addComments={addComments} />
        {comments.map((comment) => {
          return (
            <Comments
              comment={comment}
              key={comment.id}
              toggleComment={handleToggle}
              removeComment={removeComments}
            />

          )
        })}
      </section>

    </div>
  );
}

export default App;

