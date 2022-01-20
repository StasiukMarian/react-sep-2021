import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {postService} from "../../services/post-service"

const SinglePostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const {state} = useLocation()
    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getPostById(id).then(value => setPost(value))
    }, [id])
    return (
        <div>
            {
                post && (
                    <div>
                        <h3>post details : </h3>
                        <div>id : {post.id}</div>
                        <div>userId : {post.userId}</div>
                        <div>body : {post.body}</div>
                        <div>title : {post.title}</div>
                        <Link to={'comments'} state={post.id}>
                            <button>current comment</button>
                        </Link>
                        <Outlet/>
                    </div>
                )
            }
        </div>
    );
};

export default SinglePostPage;