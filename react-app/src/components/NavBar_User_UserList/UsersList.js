import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import BottomProfileButton from './BottomProfileButton';
import SocialsWidget from '../Widgets/SocialsWidget';
import './UsersList.css'

function UsersList() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
    <div className='IndividualUserContainer' key={user.id}>
      <Link className='ULLink_048' to={`/users/${user.id}`}>
        <div className='PFPic'>
          <img className='PFPic_2308' src={user.profile_pic}/>
        </div>
        <div className='PFUserListUserInfo'>
          <div className='UserListName'>{user.name}</div>
          <div className='UserListUsername'>{`@${user.username}`}</div>
          <div className='UserListDescription'>{user.bio}</div>
        </div>
      </Link>
    </div>
    );
  });

  return (
    <>
      <div className='MainContainer_23089'>
        <div className='HomePageColumns left'>
          <div className='HomePageLeft'>
            <div className='HomePageInnerLeft Column2'>
              <div className='BIRDIMGCONTAINER'>
                <img className='BIRDIMG' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg' />
              </div>
              <NavBar />
              <div className='BottomProfileButtonComponent1'>
                <BottomProfileButton user={user} />
              </div>
            </div>
          </div>
        </div>
        <div className='HomePageColumns middle'>
          <div className='HomePageCenterColumn'>
            <div className='TopOfHomePageCenterColumn'>
              <div className='HomePageCenterColumnTitle'>Users</div>
              <div className='usersListDiv'>
                {userComponents}
              </div>
            </div>
            <div className='HomePageCenterColumnFeed'>
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

export default UsersList;
