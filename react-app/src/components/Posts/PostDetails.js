import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../store/posts'
import NavBar from '../NavBar_User_UserList/NavBar'
import CreateCommentModal from '../Comments/CommentModal';
import CriticismWidget from '../Widgets/CriticismWidget';
import SocialsWidget from '../Widgets/SocialsWidget';
import '../HomePage/HomePage.css'
import './PostDetails.css'


function PostDetail() {
    const dispatch = useDispatch()
    let { id } = useParams()
    id = Number(id)
    const post = useSelector((state) => state.posts[id])
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

    return (
        <>
         <div className='HomePageColumns left'>
        <div className='HomePageLeft'>
          {/* <div className='HomePageInnerLeft Column1'>Random</div> */}
          <div className='HomePageInnerLeft Column2'>
            {/* <h2>NAVIGATION</h2> */}
            <div className='BIRDIMGCONTAINER'>
            <img className='BIRDIMG' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg'/>
            </div>
            <NavBar />
          </div>
        </div>
    </div>
        <div className='HomePageColumns middle'>
            <div className='HomePageCenterColumn'>
                <h2 className='HomePageCenterColumnTitle'>
                  Tweet
                </h2>
                <div className='ActualPostUserInfo'>
                {user.filter(user => user.id === post.user_id).map(trueUser => (
                  <div className='TweetName' key={trueUser.id}>
                    {trueUser.name}
                    <div className='TweetUsername'>
                    {"@"+trueUser.username}
                  </div>
                  </div>
                ))}
                </div>
                <div className='ActualPostBody'>
                {post?.body}
                </div>
                <div className='ActualPostImage'>
                <img className='TweetImgTag' src={post?.images}/>
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
            </div>
        </div>
        <div className='HomePageColumns right'>
        <div className='HomePageRightColumn'>
          <div className='HomePageInnerRight'>
            <h2>WIDGETS HERE</h2>
            <CriticismWidget />
            <SocialsWidget />
          </div>
          <div className='HomePageInnerRight2'></div>
        </div>
    </div>

        </>
      );
}

export default PostDetail
