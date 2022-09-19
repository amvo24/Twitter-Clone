import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar_User_UserList/NavBar';
import CriticismWidget from '../Widgets/CriticismWidget';
import SocialsWidget from '../Widgets/SocialsWidget';
import ProfileTopComponent from './ProfileTopComponent';
import GetAllPostsFromUser from "../Posts/GetAllPostsfromUser";
import BottomProfileButton from '../NavBar_User_UserList/BottomProfileButton';
import './User.css'
import { useSelector } from 'react-redux';



function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const currentUser = useSelector((state) => state.session.user)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
    <div className='MainContainer_23089'>
    <div className='HomePageColumns left'>
        <div className='HomePageLeft'>
          {/* <div className='HomePageInnerLeft Column1'>Random</div> */}
          <div className='HomePageInnerLeft Column2'>
            <div className='BIRDIMGCONTAINER'>
            <img className='BIRDIMG' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg'/>
            </div>
            <NavBar />
            <div className='BottomProfileButtonComponent'>
            <BottomProfileButton user={currentUser}/>
            </div>
          </div>
        </div>
    </div>
    <div className='HomePageColumns middle'>
        <div className='ProfilePageCenterColumn'>
            <div className='ProfilePageCenterColumnTitle'>
              <div className='ProfilePageCenterColumnTitleWord'>
                {user.name}
              </div>
            </div>
            <ProfileTopComponent user={user}/>
            <GetAllPostsFromUser user={user}/>
            {/* <CreatePost /> */}
            {/* <GetPosts /> */}
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
    </div>
    </>
  );
}
export default User;
