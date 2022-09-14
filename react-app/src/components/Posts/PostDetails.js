import React, { useEffect, useState } from 'react';
import { useParams, Link} from "react-router-dom";
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


function PostDetail() {
    const dispatch = useDispatch()
    let { id } = useParams()
    id = Number(id)
    const post = useSelector((state) => state.posts[id])
    const currentUser = useSelector((state) => state.session.user)
    const [user, setUsers] = useState([])

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

    const deletePost = (id) => async(e) => {
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
              <BottomProfileButton user={currentUser}/>
            </div>
            </div>
          </div>
        </div>
        <div className="HomePageColumns middle">
          <div className="PostDetailsCenterColumn">
            <h2 className="HomePageCenterColumnTitle">Tweet</h2>
            <div className="ActualPostUserInfo">
              {user
                .filter((user) => user.id === post?.user_id)
                .map((trueUser) => (
                  <div className='PostUserInfo_2938' key={trueUser.id}>
                    <div className='profilepiccontainer_349'>
                      <Link to={`/users/${post.user_id}`}>
                    <img className='actualPic_20937' src={trueUser.profile_pic}/>
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
              <div className="TweetCommentButton">
                <CreateCommentModal />
              </div>
              <div className="TweetRetweetsButton">RETWEETS</div>
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
                //  <button>Share</button>}
                <svg onClick={null} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" fill="#536471"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" fill="#536471"></path></g></svg>
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
              <h2>WIDGETS HERE</h2>
              <CriticismWidget />
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
