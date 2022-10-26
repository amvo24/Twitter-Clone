import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createOneComment } from '../../store/comments';
import './CreateComment.css'



const CreateComment = ({id}) => {
  const history = useHistory()
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
      history.push(`./post/${id}`)
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };


  return (
    <div className='CCmaindiv_2398'>
    <form onSubmit={handleSubmit} className="createCommentForm">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='createCommentBodyContainer'>
        <textarea
          className='CreateCommentInput'
          type='text'
          name='body'
          placeholder="Post your reply"
          onChange={updateBody}
          value={body}
        ></textarea>
      </div>
      <div className='CCimgInputandButton'>
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
        <button className='CreateCommentButton'  type='submit'>Post</button>
      </div>
    </form>
    </div>
  );
};

export default CreateComment;
