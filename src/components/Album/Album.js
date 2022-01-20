import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Album = ({album}) => {
    const {id, title} = album
    return (
        <div>
            {id})  <div>{title}</div>
            <Link to={`${id}/photos`} state={album.id}><button>current photo</button></Link>
        </div>


    );
};

export default Album;