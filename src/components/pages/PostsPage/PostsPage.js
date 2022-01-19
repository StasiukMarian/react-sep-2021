import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom"

import {postService} from "../../services/post-service";
import Post from "../../Post/Post";
import css from "./PostsPage.module.css"

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <div className={css.postsWrap}>
                <div className={css.post}>
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
                <div className={css.postsFull}><Outlet/></div>
            </div>
        </div>
    );
};

export default PostsPage;