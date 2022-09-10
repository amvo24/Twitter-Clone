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
                <svg className='TweetDeleteButton' onClick={deletePost(post.id)} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-9l7dzd r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-1b7u577 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr" width="30" height="30"><g fill="#F4212E"><path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z" fill="#F4212E"></path><path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z" fill="#F4212E"></path></g></svg>
              // <button className='TweetDeleteButton' onClick={deletePost(post.id)}>Delete</button>
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
