import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { editAUser } from '../../store/session';
import './EditProfileForm.css'



const EditProfileForm = ({user}) => {
  const [errors, setErrors] = useState([]);
  const [banner_pic, setBanner_pic] = useState(user.banner_pic);
  const [profile_pic, setProfile_pic] = useState(user.profile_pic);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

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
        return dispatch(editAUser(editedUser, id));
        // if (data) {
        //     setErrors(data)
        // }
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


//   if (user) {
//     return <Redirect to='/home' />;
//   }

  return (
    <form className='EditForm_123890' onSubmit={onEditSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='labelBoxEditForm'>

        <input
          className='EditFormInput'
          type='text'
          name='banner_pic'
          placeholder='Banner'
          onChange={updateBanner_pic}
          value={banner_pic}
        ></input>
      </div>
      <div className='labelBoxEditForm'>

        <input
          className='EditFormInput'
          type='text'
          name='profile_pic'
          placeholder='Profile Pic'
          onChange={updateProfile_pic}
          value={profile_pic}
        ></input>
      </div>
      <div className='labelBoxEditForm'>

        <input
          className='EditFormInput'
          type='text'
          name='name'
          placeholder='Name'
          onChange={updateName}
          value={name}
        ></input>
      </div>
      <div className='labelBoxEditForm'>
        <input
          className='EditFormInput'
          type='text'
          name='bio'
          placeholder='Bio'
          onChange={updateBio}
          value={bio}
        ></input>
      </div>
      <button type='submit'>Save</button>
    </form>
  );
};

export default EditProfileForm;
