import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { createOnePost } from '../../store/posts';
import { Link } from 'react-router-dom'
import './CreatePost.css'


const CreatePost = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const [errors, setErrors] = useState([]);

  const [body, setBody] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
        let newPost = {
            body,
            images
        }

      const data = await dispatch(createOnePost(newPost));
      setBody('')
      setImages('')
      if (data) {
        setErrors(data)
      }
      history.push(`/`)
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateImages = (e) => {
    setImages(e.target.value);
  };


  return (
    <div className='CreatePostContainer_235'>
      <div className='UserInfo'>
        <Link to={`/users/${user.id}`}>
          <div className='ProfilePicContainer'>
              <img className='ProfilePic' src={user.profile_pic}/>
          </div>
        </Link>
        <div className='CPUsernamecontainer'>
        <Link className='CPUsernameLink' to={`/users/${user.id}`}>
            <div className='CreatePostUsersName'>
              {user.name}
            </div>
            <div className='CreatePostUsername'>
              {'@' + user.username}
            </div>
        </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="CreatePostForm">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        {/* <div className='CreatePostBodyContainer'> */}
          <textarea
            className='CreatePostBody'
            type='text'
            name='body'
            placeholder="What's Happening?"
            onChange={updateBody}
            value={body}
          ></textarea>
        {/* </div> */}
        <div className='PostImgContainer'>
          <input
            className='CreatePostImage'
            type='text'
            name='image'
            placeholder='Add an image'
            onChange={updateImages}
            value={images}
          ></input>
        </div>
        <button className='ActualPostButton' type='submit'>Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
