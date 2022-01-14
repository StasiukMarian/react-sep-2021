import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/usersService";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])
    const [valueName, setValueName] = useState('')
    const filterUserName = users.filter(user => {
        return user.name.toLowerCase().includes(valueName.toLowerCase())
    })

    const [valueUsername, setValueUsername] = useState('')
    const filterUsername = users.filter(user => {
        return user.username.toLowerCase().includes(valueUsername.toLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                placeholder='choose your name'
                className='search_input'
                onChange={(e) => setValueName(e.target.value)}
            />
            <input
                type="text"
                placeholder='choose your username'
                className='search_input'
                onChange={(e) => setValueUsername(e.target.value)}
            />
            {

                filterUserName.map(value => <User key={value.id} id={value.id} name={value.name}
                                               username={value.username}/>)
            }
            {
                filterUsername.map(value => <User key={value.id} id={value.id} name={value.name}
                                                  username={value.username}/>)
            }
            {/*двічі рендерить і працює окремо для різних рендерів*!/*/}

        </div>
    );
};

export default Users;