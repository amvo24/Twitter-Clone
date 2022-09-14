import React from "react";
import './ProfileTopComponent.css'
import EditProfileModal from "./EditProfileModal";

function ProfileTopComponent({user}) {


    return (
        <>
        <div className="ProfileTopComponentContainer">
            <div className="BannerImg">
                <img className="ActualBannerImg" src={user.banner_pic}/>
            </div>
            <div className="ImageAndEditButton">
                <div className="ProfilePageImageContainer">
                    <img className="ProfilePageProfileImage_392" src={user.profile_pic}/>
                </div>
                <div className="EditButtonContainer">
                    {/* <div className="EditText_34789">
                        Edit profile
                    </div> */}
                    <EditProfileModal user={user} />
                </div>
            </div>
            <div className="ProfilePageDetails">
                <div className="name_9823">{user.name}</div>
                <div className="username_9823">{`@${user.username}`}</div>
                <div className="bio">{user.bio}</div>
                <div className="ProfilePagePlaceBirthJoined">
                    <div className="Container_93278">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z" fill="#536471"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z" fill="#536471"></path></g></svg>
                        <div className="Place">Place</div>
                    </div>
                    <div className="Container_93278">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z" fill="#536471"></path><path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z" fill="#536471"></path></g></svg>
                        <div className="BirthYear">{user.birthday}</div>
                    </div>
                    <div className="Container_93278">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z" fill="#536471"></path><circle cx="7.032" cy="8.75" r="1.285" fill="#536471"></circle><circle cx="7.032" cy="13.156" r="1.285" fill="#536471"></circle><circle cx="16.968" cy="8.75" r="1.285" fill="#536471"></circle><circle cx="16.968" cy="13.156" r="1.285" fill="#536471"></circle><circle cx="12" cy="8.75" r="1.285" fill="#536471"></circle><circle cx="12" cy="13.156" r="1.285" fill="#536471"></circle><circle cx="7.032" cy="17.486" r="1.285" fill="#536471"></circle><circle cx="12" cy="17.486" r="1.285" fill="#536471"></circle></g></svg>
                        <div className="Joined">Joined {user.joined}</div>
                    </div>
                </div>
            </div>

            <div className="ProfilePageBottomNavBar">
                <div className="ProfilePageBottomNavBarTweets">Tweets</div>
                <div className="ProfilePageBottomNavBarTweetsAndReplies">TweetsAndReplies</div>
                <div className="ProfilePageBottomNavBarMedia">Media</div>
                <div className="ProfilePageBottomNavBarLikes">Likes</div>
            </div>
        </div>
        </>
    )
}

export default ProfileTopComponent
