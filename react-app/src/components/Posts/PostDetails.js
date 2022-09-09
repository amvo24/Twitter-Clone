import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../store/posts'
import NavBar from '../NavBar_User_UserList/NavBar'
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
            <div className='HomePageLeftColumn'>
            <h2>NAVIGATION ITEMS</h2>
            <NavBar />
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
                {post?.images}
                </div>
            </div>
        </div>
        <div className='HomePageColumns right'>
            <div className='HomePageRightColumn'>
                <h2>WIDGETS HERE</h2>

            </div>
        </div>

        </>
      );
}

export default PostDetail
