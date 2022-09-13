import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  // if (!user) {
  //   return <Redirect to='/' />
  // }

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
