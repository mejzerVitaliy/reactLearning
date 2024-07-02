import React, { useState } from 'react'
// import Counter from './components/counter';
// import ClassComponent from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';

function App() {
    
    const [value, setValue] = useState('text inner input')
    
    
        
    return (
        <div className="App">
            {/* <ClassComponent /> */}
            
            {/* <Counter /> */}

            <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
            <PostItem post={{id: 2, title: 'Python', body: 'Description'}}/>
            <PostItem post={{id: 3, title: 'PHP', body: 'Description'}}/>
            <PostItem post={{id: 4, title: 'Java', body: 'Description'}}/>
            <PostItem post={{id: 5, title: 'Swift', body: 'Description'}}/>
            
            
        </div>
    );
    }

export default App;
