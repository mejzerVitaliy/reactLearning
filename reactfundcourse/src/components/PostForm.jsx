import { useState } from 'react';
import React from 'react'
import CreatePostBtn from './UI/button/CreatePostBtn';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {
    
    const [post, setPost] = useState({title:'', body:''})
    
    const addNewPost = (e) => {
        e.preventDefault()
        
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='title'
            
            />
                
            <MyInput
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Description'
            
            />
                
            <CreatePostBtn onClick={addNewPost}>
                Make a post
            </CreatePostBtn>
            
        </form>
    )
}

export default PostForm