function Comments({ comment }) {
    return (
        <div key={comment.id} className="item-comment">
            <div className="item-text">
                {comment.comment}
            </div>
        </div>
    )
}

export default Comments
