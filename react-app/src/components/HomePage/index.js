import GetPosts from '../Posts/GetPosts';
import NavBar from '../NavBar_User_UserList/NavBar'
import CreatePost from '../Posts/CreatePost';
import './HomePage.css'


function HomeComponent() {

  return (
    <>
    <div className='HomePageColumns left'>
        <div className='HomePageLeft'>
          {/* <div className='HomePageInnerLeft Column1'>Random</div> */}
          <div className='HomePageInnerLeft Column2'>
            <h2>NAVIGATION</h2>
            <NavBar />
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
            <h2>WIDGETS HERE</h2>

        </div>
    </div>

    </>
  );
}

export default HomeComponent;
