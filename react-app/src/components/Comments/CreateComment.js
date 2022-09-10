import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createOneComment } from '../../store/comments';
import './CreateComment.css'



const CreateComment = ({id}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const comment = useSelector((state) => state.comments)
  const [errors, setErrors] = useState([]);

  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
        let createdComment = {
            body,
            image
        }

      const data = await dispatch(createOneComment(createdComment, id));
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
    {/* <div className='UserInfo'>
      <div>
        {user.name}
      </div>
      <div>
        {'@' + user.username}
      </div>
    </div> */}
    <form onSubmit={handleSubmit} className="createCommentForm">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='createCommentBodyContainer'>
        <input
          className='CreateCommentInput'
          type='text'
          name='body'
          placeholder="Post your reply"
          onChange={updateBody}
          value={body}
        ></input>
      </div>
      <div className='createCommentImgContainer'>
        <input
          className='CreateCommentImageInput'
          type='text'
          name='image'
          placeholder='Image'
          onChange={updateImage}
          value={image}
        ></input>
      </div>
      {/* <div className='CreateCommentButton'> */}
      <button className='CreateCommentButton'  type='submit'>Update</button>
      {/* </div> */}
    </form>
    </div>
  );
};

export default CreateComment;
