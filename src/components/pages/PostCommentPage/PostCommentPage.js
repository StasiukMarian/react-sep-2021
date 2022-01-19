import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post-service";
import {useLocation} from "react-router-dom";

const PostCommentPage = () => {
    const [postComments, setPostComments] = useState([])
    const {state}= useLocation()
    useEffect(()=>{
        postService.getCommentById(state).then(value => setPostComments(value))
    }, [])
    return (
        <div>
            <h3>comments: </h3>
            {
                postComments.map(postcomment => <div key={postcomment.id}>{postcomment.id} . {postcomment.name}</div>)
            }
        </div>
    );
};

export default PostCommentPage;