import React from 'react';


const User = ({user:{id , name, email, street , city , phone , website},getId}) => {

    return (
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> email : {email}</div>
            <div> street : {street}</div>
            <div> city : {city}</div>
            <div> phone : {phone}</div>
            <div> website : {website}</div>
            <button onClick={()=> {
                getId(id)
            }}>details</button>
        </div>
    );
};

export default User;