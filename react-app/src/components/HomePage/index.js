import React, { useEffect, useState } from 'react';
import GetPosts from '../Posts/GetPosts';
import NavBar from '../NavBar_User_UserList/NavBar'
import CreatePost from '../Posts/CreatePost';
import './HomePage.css'


function HomeComponent() {
//   const dispatch = useDispatch()
//   const posts = useSelector((state) => state.posts)
//   const postsArray = Object.values(posts)
//   console.log(posts, "component")



  return (
    <>
      {/* <h1 className='HomePageTitle'>HOME PAGE</h1> */}
    <div className='HomePageColumns left'>
        <div className='HomePageLeftColumn'>
        <h2>NAVIGATION ITEMS</h2>
        <NavBar />
        </div>
    </div>
    <div className='HomePageColumns middle'>
        <div className='HomePageCenterColumn'>
            <h2 className='HomePageCenterColumnTitle'>
              Home
            </h2>
            <CreatePost />
            <GetPosts />
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

export default HomeComponent;
