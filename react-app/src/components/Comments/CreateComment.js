import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editAPost } from '../../store/posts';



const EditPost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const comment = useSelector((state) => state.comments)
  const [errors, setErrors] = useState([]);

  const [body, setBody] = useState(comment?.body);
  const [image, setImage] = useState(comment?.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
        let editedPost = {
            body,
            image
        }

      const data = await dispatch(editAPost(editedPost));
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
    <form onSubmit={handleSubmit} className="EditPostForm">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='EditPostBodyContainer'>
        <input
          className='EditPostBody'
          type='text'
          name='body'
          placeholder="What's Happening?"
          onChange={updateBody}
          value={body}
        ></input>
      </div>
      <div>
        <input
          className='EditPostImage'
          type='text'
          name='image'
          placeholder='Image'
          onChange={updateImage}
          value={image}
        ></input>
      </div>
      <div className='EditPostButton'>
      <button type='submit'>Update</button>
      </div>
    </form>
    </div>
  );
};

export default EditPost;
