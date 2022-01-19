import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {userService} from "../../services/user-service";

const SingleUserPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const {state} = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        userService.getUserById(id).then(value=> setUser(value))
    }, [])
    const toPrevious = () => {
      navigate('/users')
    }
    return (
        <div>
            <button onClick={toPrevious}>Choose other user</button>
            {
                user && (
                 <div>
                     <div>{user.id} {user.name}</div>
                     <div>{user.username}</div>
                     <div>{user.email}</div>
                     <div>{user.address.street}</div>
                     <div>{user.address.city}</div>
                     <div>{user.phone}</div>
                     <div>{user.website}</div>
                 </div>
                )}
        </div>
    );
};

export default SingleUserPage;