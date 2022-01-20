import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/usersService";

import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])

    const [valueName, setValueName] = useState('')
    const [valueUsername, setValueUsername] = useState('')
    const [valueEmail, setValueEmail] = useState('')

    const filterUserName = users.filter(user => {
        return user.name.toLowerCase().includes(valueName.toLowerCase()) &&
            user.username.toLowerCase().includes(valueUsername.toLowerCase()) &&
            user.email.toLowerCase().includes(valueEmail.toLowerCase())
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
            <input
                type="text"
                placeholder='choose your email'
                className='search_input'
                onChange={(e) => setValueEmail(e.target.value)}
            />
            {
                filterUserName.map(user => <User key={user.id} user={user}/>)
            }

        </div>
    );
};

export default Users;