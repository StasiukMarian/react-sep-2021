import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post-service"

const SinglePostPage = () => {
    const {id} = useParams()
    const [post,setPost] = useState(null)
    const {state} = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postService.getPostById(id).then(value=> setPost(value))
    }, [])
        const postChange = () => {
            navigate('/posts')
        }
    return (
        <div>
            <button onClick={postChange}>to change other post</button>
            {
                post && (
                    <div>
                        <div>id : {post.id}</div>
                        <div>userId : {post.userId}</div>
                        <div>body : {post.body}</div>
                        <div>title : {post.title}</div>
                    </div>
                )
            }
        </div>
    );
};

export default SinglePostPage;