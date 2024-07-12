import React, { useState, useEffect } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import CreatePostBtn from './components/UI/button/CreatePostBtn';
import { usePosts } from './huks/usePosts';
import PostServise from './API/PostServise';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './huks/useFetching';

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [modal, setModal] = useState(false)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
        const posts = await PostServise.getAll()
        setPosts(posts);
    })
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
        
    

    

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">          
            
            <CreatePostBtn
                onClick={() => setModal(true)}
                style={{marginTop: '30px'}}
            >
                make a post
            </CreatePostBtn>


            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
               
            <hr style={{margin: '15px 0'}}/>
            
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError &&
                <h1 style={{display: 'flex', justifyContent: 'center', color: 'red'}}>There is error: ${postError}</h1>
            }
            
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>< Loader /> </div>
                : <PostList remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"List of item 1"}
                />
            }

            
                      
        </div>
    );
}

export default App;
