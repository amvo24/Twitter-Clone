import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className='LMForm' onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='LFinputcontainer'>
        <input
          name='email'
          type='text'
          
          required
          value={email}
          onChange={updateEmail}
        />
        <label htmlFor='email' class='label-name'>
          <div class="content-name">Email</div>
        </label>
      </div>
      <div className='LFinputcontainer'>
        <input
          name='password'
          type='password'
          
          required
          value={password}
          onChange={updatePassword}
        />
        <label htmlFor='password' class='label-name'>
          <div class="content-name">Password</div>
        </label>
      </div>
        <button className='LMButton' type='submit'>
          <div className='LMButtontext'>Login</div>
        </button>
    </form>
  );
};

export default LoginForm;
