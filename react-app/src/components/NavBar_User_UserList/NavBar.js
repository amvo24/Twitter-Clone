
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <li>
          <NavLink to='/home' exact={true} className='NavBarLinks' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <div className='spacerDivNavBar'></div>
        <li>
          <NavLink to='/login' exact={true} className='NavBarLinks' activeClassName='active'>
            Login
          </NavLink>
        </li>
        <div className='spacerDivNavBar'></div>
        <li>
          <NavLink to='/sign-up' exact={true} className='NavBarLinks' activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <div className='spacerDivNavBar'></div>
        <li>
          <NavLink to='/users' exact={true} className='NavBarLinks' activeClassName='active'>
            Users
          </NavLink>
        </li>
        <div className='spacerDivNavBar'></div>
        <li>
          <LogoutButton />
        </li>
    </nav>
  );
}

export default NavBar;
