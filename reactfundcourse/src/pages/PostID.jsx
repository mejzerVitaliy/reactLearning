import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../huks/useFetching'
import Loader from '../components/UI/Loader/Loader'
import PostServise from '../API/PostServise'

const PostID = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    
    
    const [fetchPostByID, isLoading, error] = useFetching(async (id) => {
        const response = await PostServise.getByID(id)
        setPost(response.data)
    })

    const [fetchComments, isCommLoading, commError] = useFetching(async (id) => {
        const response = await PostServise.getCommentsByPostID(id)
        setComments(response.data)
    })


    useEffect(() => {
        console.log("Params ID:", params.id)
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>You are opened post with id : {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }  

            <h1>Comments</h1>
            {isLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: '15px'}}>
                            <h4>{ comm.email }</h4>
                            <div>{ comm.body }</div>
                        </div>
                    )}
                </div>
            } 

        </div>
    )
}

export default PostID