import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postReducer, { getAllPosts } from '../../store/posts';
import { NavLink, Link } from 'react-router-dom';
import './GetPosts.css'

function GetPosts() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const postsArray = Object.values(posts)
  console.log(posts, "component")

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <h1>MAIN TWEETS PAGE</h1>
      <div>
        {postsArray.map((post) => (
          <div className='TweetContainer'>
            <div className='TweetUsername'>
            --USERNAME GOES HERE--
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GetPosts;
