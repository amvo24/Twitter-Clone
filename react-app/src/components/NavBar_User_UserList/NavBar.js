
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='kjdhsbf2390'>
      <li className="IconContainer">
          <div className="HomeIcon">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="46"
              height="46"
            >
              <g fill="#0F1419">
                <path
                  d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
                  fill="#0F1419"
                ></path>
              </g>
            </svg>
          </div>
          <div className="HomeText">
            <NavLink
              to="/home"
              exact={true}
              className="NavBarLinks"
              activeClassName="active"
            >
              Home
            </NavLink>
          </div>
      </li>
      <div className="spacerDivNavBar"></div>
      <li className="IconContainer">
        <NavLink
          to="/login"
          exact={true}
          className="NavBarLinks"
          activeClassName="active"
        >
          Login
        </NavLink>
      </li>
      <div className="spacerDivNavBar"></div>
      <li className="IconContainer">
        <NavLink
          to="/sign-up"
          exact={true}
          className="NavBarLinks"
          activeClassName="active"
        >
          Sign Up
        </NavLink>
      </li>
      <div className="spacerDivNavBar"></div>
      <li className="IconContainer">
        <NavLink
          to="/users"
          exact={true}
          className="NavBarLinks"
          activeClassName="active"
        >
          Users
        </NavLink>
      </li>
      <div className="spacerDivNavBar"></div>
      <li className="IconContainer">
        <div className="ProfileIcon">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="34"
            height="34"
          >
            <g fill="#0F1419">
              <path
                d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                fill="#0F1419"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <NavLink
            to="/users"
            exact={true}
            className="NavBarLinks"
            activeClassName="active"
          >
            Profile
          </NavLink>
        </div>
      </li>
      <div className="spacerDivNavBar"></div>
      <li>
        <LogoutButton />
      </li>
    </nav>
  );
}

export default NavBar;
