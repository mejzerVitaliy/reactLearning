import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import CreatePostBtn from './components/UI/button/CreatePostBtn';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'Python', body: 'Description' },
        { id: 3, title: 'PHP', body: 'Description' },
        { id: 4, title: 'Java', body: 'Description' },
        { id: 5, title: 'Swift', body: 'Description' },
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
        } else return posts
    }, [filter.sort, posts])
    

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])
        
    const [modal, setModal] = useState(false)


    
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
            
            
            <PostList remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"List of item 1"}
            />
            
            
        </div>
    );
}

export default App;
