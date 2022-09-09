import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createOnePost } from '../../store/posts';
import User from '../NavBar_User_UserList/User'
import './CreatePost.css'


const CreatePost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const [errors, setErrors] = useState([]);
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
        let newPost = {
            body,
            image
        }

      const data = await dispatch(createOnePost(newPost));
      if (data) {
        setErrors(data)
      }
    };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };


  return (
    <div>
    <div className='UserInfo'>
      <div>
        {user.name}
      </div>
      <div>
        {'@' + user.username}
      </div>
    </div>
    <form onSubmit={handleSubmit} className="CreatePostForm">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='CreatePostBodyContainer'>
        <textarea
          className='CreatePostBody'
          type='text'
          name='body'
          placeholder="What's Happening?"
          onChange={updateBody}
          value={body}
        ></textarea>
      </div>
      <div>
        <textarea
          className='CreatePostImage'
          type='text'
          name='image'
          placeholder='Image'
          onChange={updateImage}
          value={image}
        ></textarea>
      </div>
      <div className='CreatePostButton'>
      <button type='submit'>Post</button>
      </div>
    </form>
    </div>
  );
};

export default CreatePost;
