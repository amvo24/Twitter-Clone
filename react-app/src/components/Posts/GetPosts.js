import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts, deleteAPost } from '../../store/posts';
import CreateCommentModal from '../Comments/CommentModal';
import './GetPosts.css'

function GetPosts() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const currentUser = useSelector((state) => state.session.user)
  const postsArray = Object.values(posts).reverse()
  const [users, setUsers] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const deletePost = (id) => async(e) => {
    e.preventDefault()
    dispatch(deleteAPost(id))
  }

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <h1>MAIN TWEETS PAGE</h1>
      <div>
        {postsArray.map((post) => (
          <div className='TweetContainer' key={post.id}>
                <Link to={`./post/${post.id}`} className='TweetLink'>
              <div className='TweetUserContainer'>
                <div className='TweetContainerTopHalf'>
                {users.filter(user => user.id === post.user_id).map(trueUser => (
                  <div className='TweetName' key={trueUser.id}>
                    {trueUser.name}
                    <div className='TweetUsername'>
                    {"@"+trueUser.username}
                  </div>
                  </div>
                ))}
            <div className='TweetBody'>
              {post.body}
            </div>
              </div>
            </div>
            {/* <div className='TweetImageContainer'> */}
             <img className='TweetImgTag' src={post.images}/>
            {/* </div> */}
            <div className='TweetBottomBar'>
              <div className='TweetCommentButton'>
              <CreateCommentModal />
              </div>
              <div className='TweetRetweetsButton'>
              RETWEETS
              </div>
              <div className='TweetLikesButton'>
              LIKES
              </div>
              <div className='TweetDeleteButtonDiv'>
                {currentUser && currentUser.id === post.user_id && (
              <button className='TweetDeleteButton' onClick={deletePost(post.id)}>Delete</button>
              ) || (<button>Share</button>)}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default GetPosts;
