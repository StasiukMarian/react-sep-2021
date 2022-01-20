import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user-service";
import {Outlet, useLocation, useParams} from "react-router-dom";

import css from './photo.module.css'

const PhotoPage = () => {
    const {albumId} = useParams()
    const [photos, setPhotos] = useState([])
    console.log(albumId)
    useEffect(() => {
        userService.getPhotosById(albumId).then(value => setPhotos(value))
    }, [albumId])
    return (
        <div className={css.photoWrap}>
            {
                photos.map(photo => <div key={photo.id}>
                    <div>{photo.title} </div>
                    <img src={photo.url} alt=""/></div>)
            }
        </div>
    );
};

export default PhotoPage;