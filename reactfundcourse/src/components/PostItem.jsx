import React from 'react'
import CreatePostBtn from './UI/button/CreatePostBtn'

function PostItem(props) {
    
    return (
        <div className='post'>
                    
            <div className="post__content">
                <strong>{props.number}. { props.post.title }</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <CreatePostBtn onClick={() => props.remove(props.post)}>
                    DELETE
                </CreatePostBtn>
            </div>
                    
        </div>
    )
}

export default PostItem