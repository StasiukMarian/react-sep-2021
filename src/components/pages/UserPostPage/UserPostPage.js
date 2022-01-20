import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user-service";

const UserPostPage = () => {
    const [userPosts, setUserPosts] = useState([])
    const {state} = useLocation()
    useEffect(() => {
        userService.getPostsById(state).then(value => setUserPosts(value))
    }, [])
    return (
        <div>
            <div>posts:</div>
            {
                userPosts.map(userpost => <div key={userpost.id}>{userpost.id}){userpost.title}</div>)
            }
        </div>
    );
};

export default UserPostPage;