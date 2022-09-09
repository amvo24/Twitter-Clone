import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createOnePost } from '../../store/posts';
import './CreatePost.css'


const CreatePost = () => {
  const dispatch = useDispatch();

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
    
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>What's Happening?</label>
        <input
          type='text'
          name='body'
          onChange={updateBody}
          value={body}
        ></input>
      </div>
      <div>
        <label>Image</label>
        <input
          type='text'
          name='image'
          onChange={updateImage}
          value={image}
        ></input>
      </div>

      <button type='submit'>Post</button>
    </form>
  );
};

export default CreatePost;
