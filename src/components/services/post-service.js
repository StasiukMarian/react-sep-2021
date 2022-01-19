import {axiosService} from "./axios-service";
import {urls} from "../../config/urls";

export const postService = {
    getAllPosts:() => axiosService.get(urls.posts)
        .then(value => value.data),
    getPostById:(id) => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data)
}