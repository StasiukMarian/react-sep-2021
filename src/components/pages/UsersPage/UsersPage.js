import React, {useEffect, useState} from 'react';

import User from "../../User/User";
import {Outlet} from "react-router-dom"
import {userService} from "../../services/user-service";

import css from "./UsersPage.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value))
    }, [])
    return (
        <div>
            <h1>Users :</h1>
            <div className={css.usersWrap}>
                <div className={css.user}>
                    {
                        users.map(user => <User key={user.id} user={user}/>)
                    }
                </div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export default UsersPage;