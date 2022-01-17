import React from 'react';

const UsersDetail = ({user,getUserId}) => {
    const {id,name,username,email} = user
    return (
        <div>
            <div>{id} {name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={()=>getUserId(id)}>to post</button>
        </div>
    );
};

export default UsersDetail;