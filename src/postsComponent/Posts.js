import React, {useEffect, useState} from 'react';
import {userService} from  '../services/userService'
import Post from "./Post";

const Posts = ({id}) => {
     let [posts , setPosts] = useState([])

    useEffect(() => {
        userService.getPosts().then(value => setPosts(value.filter(elem => elem.userId === id)))
    }, []);
    return (
        <div className='post'>
            {
                posts.map(value =>
                    <Post key={value.id}
                          id={value.id}
                          title={value.title}
                          body={value.body}
                    />)
            }
        </div>
    );
};
export default Posts;