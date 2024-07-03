import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'Python', body: 'Description' },
        { id: 3, title: 'PHP', body: 'Description' },
        { id: 4, title: 'Java', body: 'Description' },
        { id: 5, title: 'Swift', body: 'Description' },
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort);
    }
        
    return (
        <div className="App">          
            <PostForm create={createPost} />   
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Sort by...'
                    options={[
                        { value: 'title', name: 'title' },
                        { value: 'body', name: 'body' }
                    ]}
                />              
            </div>
            
            {posts.length !== 0
                ?<PostList remove = {removePost}  posts={posts} title={"List of item 1"} />
                : <h1 style={{textAlign: 'center'}}>Posts undefined!!!</h1>
            }
            
        </div>
    );
}

export default App;
