import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, deleteAPost } from '../../store/posts'
import NavBar from '../NavBar_User_UserList/NavBar'
import CreateCommentModal from '../Comments/CommentModal';
import CriticismWidget from '../Widgets/CriticismWidget';
import SocialsWidget from '../Widgets/SocialsWidget';
import GetCommentsForPost from '../Comments/GetCommentsForPost'
import BottomProfileButton from '../NavBar_User_UserList/BottomProfileButton';
import '../HomePage/HomePage.css'
import './PostDetails.css'
import SharePost from '../SharePost/SharePost';


function PostDetail() {
  const dispatch = useDispatch()
  let { id } = useParams()
  id = Number(id)
  const post = useSelector((state) => state.posts[id])
  const currentUser = useSelector((state) => state.session.user)
  const comments = useSelector((state) => state.comments)
  const commentArray = Object.values(comments)
  const [user, setUsers] = useState([])

  const handleClick = () => {
    alert('This feature will be coming soon!')
  }

  useEffect(() => {
    dispatch(getOnePost(id))
  }, [dispatch, id])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const deletePost = (id) => async (e) => {
    e.preventDefault()
    dispatch(deleteAPost(id))
  }

  return (
    <>
      <div className='MainContainer_23089'>
        <div className="HomePageColumns left">
          <div className="HomePageLeft">
            {/* <div className='HomePageInnerLeft Column1'>Random</div> */}
            <div className="HomePageInnerLeft Column2">
              {/* <h2>NAVIGATION</h2> */}
              <div className="BIRDIMGCONTAINER">
                <img
                  className="BIRDIMG"
                  src="https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg"
                />
              </div>
              <NavBar />
              <div className='BottomProfileButtonComponent'>
                <BottomProfileButton user={currentUser} />
              </div>
            </div>
          </div>
        </div>
        <div className="HomePageColumns middle">
          <div className="PostDetailsCenterColumn">
            <div className="PostDetailsColumnTitle">
              <div className='PostDetailsColumnTitleWord'>Tweet</div>
            </div>
            <div className="ActualPostUserInfo">
              {user
                .filter((user) => user.id === post?.user_id)
                .map((trueUser) => (
                  <div className='PostUserInfo_2938' key={trueUser.id}>
                    <div className='profilepiccontainer_349'>
                      <Link to={`/users/${post.user_id}`}>
                        <img className='actualPic_20937' src={trueUser.profile_pic} />
                      </Link>
                    </div>
                    <div className='UsernameLink_849'>
                      <Link className='UsernameLink_849' to={`/users/${post.user_id}`}>
                        <div className="TweetName comments_0249">
                          {trueUser.name}
                        </div>
                        <div className="TweetUsername">
                          {"@" + trueUser.username}
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div className="ActualPostBody">{post?.body}</div>
            <div className="ActualPostImage">
              <img className="TweetImgTag" src={post?.images} />
            </div>
            <div className="TweetBottomBar">
              <div className='buttonAndAmountcontainer'>
                <div className="TweetCommentButton">
                  <CreateCommentModal />
                </div>
                <div className='Numberof'>
                  {commentArray.filter((filtered) => filtered.post.id === id).length}
                </div>
              </div>
              <div className="TweetRetweetsButton">
                <svg
                  onClick={handleClick}
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  width="25" 
                  height="25"><g 
                  fill="#536471"><path 
                  d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" 
                  fill="#536471"
                  ></path></g></svg>
              </div>
              <div className="TweetLikesButton">LIKES</div>
              <div className="TweetDeleteButtonDiv">
                {(currentUser && currentUser.id === post?.user_id && (
                  <svg
                    className="TweetDeleteButton"
                    onClick={deletePost(id)}
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width="30"
                    height="30"
                  >
                    <g fill="#F4212E">
                      <path
                        d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"
                        fill="#F4212E"
                      ></path>
                      <path
                        d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"
                        fill="#F4212E"
                      ></path>
                    </g>
                  </svg>
                )) ||
                  <SharePost post={post} /> 
                }
              </div>
            </div>
          </div>
          <div>
            <GetCommentsForPost id={id} />
          </div>
        </div>
        <div className="HomePageColumns right">
          <div className="HomePageRightColumn">
            <div className="HomePageInnerRight">
              {/* <h2>WIDGETS HERE</h2>
              <CriticismWidget /> */}
              <SocialsWidget />
            </div>
            <div className="HomePageInnerRight2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetail
