import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import GetPosts from '../Posts/GetPosts';
import NavBar from '../NavBar_User_UserList/NavBar'
import './HomePage.css'


function HomeComponent() {
//   const dispatch = useDispatch()
//   const posts = useSelector((state) => state.posts)
//   const postsArray = Object.values(posts)
//   console.log(posts, "component")



  return (
    <>
      <h1 className='HomePageTitle'>HOME PAGE</h1>
    <div className='HomePageColumn left'>
        <div className='HomePageLeftColumn'>
        <h2>NAVIGATION ITEMS</h2>
        <NavBar />
        </div>
    </div>
    <div className='HomePageColumn middle'>
        <div className='HomePageCenterColumn'>
            <h2>CENTER</h2>
            <GetPosts />
        </div>
    </div>
    <div className='HomePageColumn right'>
        <div className='HomePageRightColumn'>
            <h2>WIDGETS HERE</h2>

        </div>
    </div>

    </>
  );
}

export default HomeComponent;
