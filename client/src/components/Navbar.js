import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => (
  <div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        <li>
            <Link to='/play'>Play</Link>
        </li>
    </ul>
  </div>
);

export default Navbar;