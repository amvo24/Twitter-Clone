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

  if (!user) {
    return <Redirect to='/' />
  }

  return (
    <div onClick={onLogout} className="Text_9032">
      <div className='TextHere_9032'>{`Log out @${user.username}`}</div>
    </div>
  )
};

export default LogoutButton;
