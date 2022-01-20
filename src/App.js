import {Routes, Route, Link} from "react-router-dom";

import css from './App.module.css'

import HomePage from "./components/pages/HomePage/HomePage";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./components/pages/SingleUserPAge/SingleUserPage";
import SinglePostPage from "./components/pages/SinglePostPage/SinglePostPage";
import UserPostPage from "./components/pages/UserPostPage/UserPostPage";
import PostCommentPage from "./components/pages/PostCommentPage/PostCommentPage";
import AlbumPage from "./components/pages/AlbumPage/AlbumPage";
import PhotoPage from "./components/pages/PhotoPage/PhotoPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                            <Route path={'albums'} element={<AlbumPage/>}>
                                <Route path={':albumId/photos'} element={<PhotoPage/>}/>
                            </Route>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
