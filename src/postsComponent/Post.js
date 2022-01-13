import React from 'react';

const Post = ({id,title,body}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;