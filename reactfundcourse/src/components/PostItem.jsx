import React from 'react'
import CreatePostBtn from './UI/button/CreatePostBtn'
import { useNavigate } from 'react-router-dom'

function PostItem(props) {
    const navigate = useNavigate()
    
    const openPost = () => {
        navigate(`/posts/${props.post.id}`)
    }


    return (
        <div className='post'>
                    
            <div className="post__content">
                <strong>{props.number}. { props.post.title }</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <CreatePostBtn onClick={openPost}>
                    OPEN
                </CreatePostBtn>
                <CreatePostBtn onClick={() => props.remove(props.post)}>
                    DELETE
                </CreatePostBtn>
            </div>
                    
        </div>
    )
}

export default PostItem