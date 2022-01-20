import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {userService} from "../../services/user-service";

const SingleUserPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const {state} = useLocation()
    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        userService.getUserById(id).then(value=> setUser(value))
    }, [id])

    return (
        <div>
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
                     <Link to={'posts'} state={user.id}><button>current post</button></Link>
                     <Link to={'albums'} state={user.id}><button>current album</button></Link>
                     <Outlet/>
                 </div>
                )}

        </div>
    );
};

export default SingleUserPage;