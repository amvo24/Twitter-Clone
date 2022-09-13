import React from "react";
import './ProfileTopComponent.css'

function ProfileTopComponent({user}) {


    return (
        <>
        <div className="ProfileTopComponentContainer">
            <div className="BannerImg">
                <img className="ActualBannerImg" src='https://cdn.wallpapersafari.com/5/3/l4ZCMe.jpg'/>
            </div>
            <div className="ProfilePageImageContainer">
                <img className="ProfilePageProfileImage_392" src={user.profile_pic}/>
            </div>
            <div className="ProfilePageDetails">
                <div className="name_9823">{user.name}</div>
                <div className="username_9823">{`@${user.username}`}</div>
                <div className="bio">{user.bio}</div>
                <div className="ProfilePagePlaceBirthJoined">
                    <div className="Place">Place</div>
                    <div className="BirthYear">{user.birthday}</div>
                    <div className="Joined">Joined {user.joined}</div>
                </div>
            </div>
            <div className="ProfilePageBottomNavBar">
                <div className="TweetsNavBar">Tweets</div>
                <div className="TweetsAndReplies">TweetsAndReplies</div>
                <div className="Media">Media</div>
                <div className="Likes">Likes</div>
            </div>
        </div>
        </>
    )
}

export default ProfileTopComponent
