import React from 'react';

const User = (props) => {
   let {id , name , username} = props
    return (
        <div>
                <div>id : {id}</div>
                <div>name : {name}</div>
                <div>username : {username}</div>
        </div>
    );
};

export default User;