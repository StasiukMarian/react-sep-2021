import React from 'react';

const Post = (props) => {
    let {id , title , body} = props
    return (
        <div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
        </div>
    );
};

export default Post;