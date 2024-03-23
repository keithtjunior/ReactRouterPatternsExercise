import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <div id='main'>
        <nav>
            <ul>
                <li><Link to='/colors'>Home</Link></li>
                {user ? 
                    <li><Link onClick={logout}>Logout</Link></li> :
                    <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </nav>
        <Outlet />
        </div>
    );
}

export default Nav;
