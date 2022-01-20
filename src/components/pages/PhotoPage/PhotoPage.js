import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user-service";
import {Outlet, useLocation, useParams} from "react-router-dom";

const PhotoPage = () => {
    const {albumId} = useParams()
    const [photos, setPhotos] = useState([])
    console.log(albumId)
    useEffect(()=>{
      userService.getPhotosById(albumId).then(value => setPhotos(value))
    },[])
    return (
        <div>
            {
                photos.map(photo=><div key={photo.id}> {photo.title} <img src={photo.url} alt=""/> </div>)
            }
        </div>
    );
};

export default PhotoPage;