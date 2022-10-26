import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { editAUser } from '../../store/session';
import './EditProfileForm.css'



const EditProfileForm = ({setShowModal, user}) => {
  const [errors, setErrors] = useState([]);
  const [banner_pic, setBanner_pic] = useState(user.banner_pic);
  const [profile_pic, setProfile_pic] = useState(user.profile_pic);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const history = useHistory()

//   const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  let id = user.id

  const onEditSubmit = async (e) => {
    e.preventDefault();

        let editedUser = {
            banner_pic,
            profile_pic,
            name,
            bio
        }

        dispatch(editAUser(editedUser, id))
        setShowModal(false)
  };

  const updateBanner_pic = (e) => {
    setBanner_pic(e.target.value);
  };

  const updateProfile_pic = (e) => {
    setProfile_pic(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };


  return (
    <form className='EditForm_123890' onSubmit={onEditSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='labelBoxContainer'>
        <div className='inputBoxEditForm'>
          <div className='InputLabelEditForm'>Banner Image</div>
          <input
            className='EditFormInput'
            type='text'
            name='banner_pic'
            placeholder='Banner'
            onChange={updateBanner_pic}
            value={banner_pic}
          ></input>
        </div>
      </div>
      <div className='labelBoxContainer'>
          <div className='inputBoxEditForm'>
            <div className='InputLabelEditForm'>Profile Picture</div>
            <input
              className='EditFormInput'
              type='text'
              name='profile_pic'
              // placeholder='Profile Pic'
              onChange={updateProfile_pic}
              value={profile_pic}
            ></input>
          </div>
      </div>
      <div className='labelBoxContainer'>
        <div className='inputBoxEditForm'>
          <div className='InputLabelEditForm'>Name</div>
          <input
            className='EditFormInput'
            type='text'
            name='name'
            // placeholder='Name'
            onChange={updateName}
            value={name}
          ></input>
        </div>
      </div>
      <div className='labelBoxContainer'>
        <div className='inputBoxEditFormBIO'>
          <div className='InputLabelEditForm'>Bio</div>
          <textarea
            className='EditFormInputBIO'
            type='text'
            name='bio'
            // placeholder='Bio'
            onChange={updateBio}
            value={bio}
          ></textarea>
        </div>
      </div>
      <button className='EditFormButton' type='submit'>Save</button>
    </form>
  );
};

export default EditProfileForm;
