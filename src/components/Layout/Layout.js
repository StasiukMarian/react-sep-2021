import {Link, Outlet} from "react-router-dom";

import css from "./Layout.module.css"


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <Link to="/home">home</Link>
                <Link to="/users">users</Link>
                <Link to="/posts">posts</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;