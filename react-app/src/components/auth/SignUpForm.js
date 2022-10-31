import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  // const [bannerPic, setBannerPic] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  // const updateProfilePic = (e) => {
  //   setProfilePic(e.target.value);
  // };
  // const updateBannerPic = (e) => {
  //   setProfilePic(e.target.value);
  // };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateBirthday = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className='SignUpForm1' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='outerDivSUF'>
          <input
            type='text'
            name='username'
            required
            autoComplete='off'
            onChange={updateUsername}
            value={username}
          ></input>
          <label for='username' class='label-name'>
            <div class="content-name">Username</div>
          </label>
      </div>
      <div className='outerDivSUF'>
        <input
          type='text'
          name='name'
          required
          onChange={updateName}
          value={name}
        ></input>
        <label for='username' class='label-name'>
            <div class="content-name">Name</div>
        </label>
      </div>
      <div className='outerDivSUF'>
        <input
          type='text'
          name='email'
          required
          onChange={updateEmail}
          value={email}
        ></input>
        <label for='username' class='label-name'>
            <div class="content-name">Email</div>
        </label>
      </div>
      {/* Birthday currently in development, looking to add a calendar drop down
      in the sign-up form */}
      {/* <div className='outerDivSUF'>
        <input
          type=''
          name='birthday'
          required
          onChange={updateBirthday}
          value={email}
        ></input>
        <label for='username' class='label-name'>
            <div class="content-name">Birthday</div>
        </label>
      </div> */}
      <div className='outerDivSUF'>
        <input
          type='password'
          name='password'
          required
          onChange={updatePassword}
          value={password}
          ></input>
         <label for='username' class='label-name'>
            <div class="content-name">Password</div>
        </label>
      </div>
      <div className='outerDivSUF'>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
        <label for='username' class='label-name'>
            <div class="content-name">Repeat Password</div>
        </label>
      </div>
      <button className='SUFbutton' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
