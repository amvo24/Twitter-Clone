import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../store/posts';
import CreateCommentModal from '../Comments/CommentModal';
import './GetPosts.css'

function GetPosts() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const comments = useSelector((state) => state.comments)
  const postsArray = Object.values(posts)
  const [users, setUsers] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

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
              <div className='TweetUserContainer' >
                {users.filter(user => user.id === post.user_id).map(trueUser => (
                  <div className='TweetName' key={trueUser.id}>
                    {trueUser.name}
                    <div className='TweetUsername'>
                    {"@"+trueUser.username}
                  </div>
                  </div>
                ))}
              </div>
            <div className='TweetBody'>
              {post.body}
            </div>
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
              <div className='TweetDeleteButton'>
              DELETE
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
