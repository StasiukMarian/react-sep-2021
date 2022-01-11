import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    } , [])
    return (
        <div className='posts'>
            {posts.map(value => <Post id = {value.id} title = {value.title} body = {value.body} />)}
        </div>
    );
};

export default Posts;