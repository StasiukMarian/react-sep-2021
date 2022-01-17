import React from 'react';

const Post = ({post}) => {
    const {id,userId,body,title} = post
    return (
        <div>
            <div>id = {id}</div>
            <div>userId = {userId}</div>
            <div>body = {body}</div>
            <div>title = {title}</div>
        </div>
    );
};

export default Post;