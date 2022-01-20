import {axiosService} from "./axios-service";
import {urls} from "../../config/urls";

export const userService = {
    getAllUsers:()=>axiosService.get(urls.users)
        .then(value => value.data),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data),
    getPostsById:(userId)=>axiosService.get(`${urls.users}/${userId}/posts`)
        .then(value => value.data),
    getAlbumsById:(userId)=>axiosService.get(`${urls.users}/${userId}/albums`)
        .then(value => value.data),
    getPhotosById:(albumId)=>axiosService.get(`${urls.albums}/${albumId}/photos`)
        .then(value => value.data)

}
