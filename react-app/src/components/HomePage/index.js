import React, {useState, useEffect} from 'react';
import GetPosts from '../Posts/GetPosts';
import NavBar from '../NavBar_User_UserList/NavBar'
import CreatePost from '../Posts/CreatePost';
import CriticismWidget from '../Widgets/CriticismWidget';
import SocialsWidget from '../Widgets/SocialsWidget';
import BottomProfileButton from '../NavBar_User_UserList/BottomProfileButton';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComment } from '../../store/comments';
import './HomePage.css'


function HomeComponent() {
  const user = useSelector((state) => state.session.user)


  return (
    <>
    <div className='MainContainer_23089'>
    <div className='HomePageColumns left'>
        <div className='HomePageLeft'>
          <div className='HomePageInnerLeft Column2'>
            <div className='BIRDIMGCONTAINER'>
            <img className='BIRDIMG' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg'/>
            </div>
            <NavBar />
            <div className='BottomProfileButtonComponent1'>
            <BottomProfileButton user={user}/>
            </div>
          </div>
        </div>
    </div>
    <div className='HomePageColumns middle'>
        <div className='HomePageCenterColumn'>
          <div className='TopOfHomePageCenterColumn'>
            <div className='HomePageCenterColumnTitle'>Home</div>
            <CreatePost />
          </div>
          <div className='HomePageCenterColumnFeed'>
            <GetPosts />
          </div>
        </div>
    </div>
    <div className='HomePageColumns right'>
        <div className='HomePageRightColumn'>
          <div className='HomePageInnerRight'>
            <SocialsWidget />
          </div>
          <div className='HomePageInnerRight2'></div>
        </div>
    </div>
    </div>
    </>
  );
}

export default HomeComponent;
