import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user-service";
import {Outlet, useLocation, useParams} from "react-router-dom";

import Album from "../../Album/Album";

const AlbumPage = () => {
    const [albums, setAlbums] = useState([])
    const {state} = useLocation()
    useEffect(() => {
        userService.getAlbumsById(state).then(value => setAlbums(value))
    }, [])
    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
            <Outlet/>
        </div>
    );
};

export default AlbumPage;