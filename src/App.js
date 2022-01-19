import {Routes, Route, Link} from "react-router-dom";

import css from './App.module.css'

import HomePage from "./components/pages/HomePage/HomePage";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./components/pages/SingleUserPAge/SingleUserPage";
import SinglePostPage from "./components/pages/SinglePostPage/SinglePostPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}/>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>

                </Route>
            </Routes>
        </>
    );
}

export default App;
