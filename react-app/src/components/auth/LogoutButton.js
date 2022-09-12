import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
  // <div onClick={onLogout} className='TwitterBlueButton'>
  //   <div className='WordContainer'>
  //   <div className='LogoutWord'>Log Out</div>
  //   </div>
  // </div>
  <button onClick={onLogout}>Log Out</button>
  )
};

export default LogoutButton;
