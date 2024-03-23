import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Nav = ({ names }) => {
  return (
    <div id='main'>
      <nav>
        <ul>
          <li><Link to='/dogs'>HOME</Link></li>
          {names.map(name => 
            <li>
              <Link 
                to={`/dogs/${name.toLowerCase()}`}>
                  {name.toUpperCase()}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
