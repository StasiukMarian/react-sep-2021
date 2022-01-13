import React from 'react';


const User = ({user:{id , name, email},getId}) => {

    return (
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> email : {email}</div>
            <button onClick={()=> {
                getId(id)
            }}>details</button>
        </div>
    );
};

export default User;