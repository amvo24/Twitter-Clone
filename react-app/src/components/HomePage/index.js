import GetPosts from '../Posts/GetPosts';
import NavBar from '../NavBar_User_UserList/NavBar'
import CreatePost from '../Posts/CreatePost';
import CriticismWidget from '../Widgets/CriticismWidget';
import SocialsWidget from '../Widgets/SocialsWidget';
import BottomProfileButton from '../NavBar_User_UserList/BottomProfileButton';
import { useSelector } from 'react-redux';
import './HomePage.css'


function HomeComponent() {
  const user = useSelector((state) => state.session.user)

  return (
    <>
    <div className='MainContainer_23089'>
    <div className='HomePageColumns left'>
        <div className='HomePageLeft'>
          {/* <div className='HomePageInnerLeft Column1'>Random</div> */}
          <div className='HomePageInnerLeft Column2'>
            {/* <h2>NAVIGATION</h2> */}
            <div className='BIRDIMGCONTAINER'>
            <img className='BIRDIMG' src='https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg'/>
            </div>
            <NavBar />
            <div className='BottomProfileButtonComponent'>
            <BottomProfileButton user={user}/>
            </div>
          </div>
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

export default HomeComponent;
