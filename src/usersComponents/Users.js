import React, {useEffect, useState} from 'react';
import {userService} from "../services/userService";
import User from "./User";
import Posts from "../postsComponent/Posts";

const Users = () => {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)
    let [status, setStatus] = useState(false)
    const getId = (id) => {
        userService.getUser(id).then(value => setUser(value))
    }
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value))
    }, [])

    function checkStatus(status) {
        setStatus(status)
    }

    return (
        <div className='user-wrap'>

            <div className='user'>
                {users.map(value =>
                    <User
                        key={value.id}
                        user={value}
                        getId={getId}
                    />)
                }
            </div>

            <div className='details'>
                {user &&
                <div>
                    <div>{user.id}.{user.name}  </div>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <button onClick={() => {
                        checkStatus(true);
                    }}>to post
                    </button>
                </div>
                }
                {
                    status && <Posts id={user.id}/>
                }

            </div>

        </div>
    );
};

export default Users;