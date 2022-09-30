import { useState } from 'react'


function CommentPage() {

    const [ironman, setComments] = useState([])

    const fetchComments = async () => {
        const response = await fetch('/api/comments/first')
        const data = await response.json()
        setComments(data)
    }
    return(
        <>
            <button onClick={fetchComments}>Load Comments</button>
            {ironman.map(comment => {
                return(
                <div key={comment.id}>
                    {comment.id} {comment.name}

                </div>
                )
            })}
        </>
    )

}
export default CommentPage