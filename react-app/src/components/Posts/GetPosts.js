import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/posts';
import './GetPosts.css'

function GetPosts() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  // const user = useSelector((state) => state.session.user)
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
          <div className='TweetContainer'>
              <div className='TweetUserContainer'>
                {users.filter(user => user.id === post.user_id).map(trueUser => (
                  <div className='TweetName'>
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
              COMMENTS
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
          </div>
        ))}
      </div>
    </>
  );
}

export default GetPosts;
