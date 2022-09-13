import React from "react";
import './BottomProfileButton.css'

function BottomProfileButton({user}) {

    return (
        <>
        <div className="Container_3028">
            <div className="Content_3028">
                <div className="ProfilePic_381296">
                    <img className="ActualPic_381296" src={user.profile_pic}/>
                </div>
                <div className="NameAndInfo_90238">
                    <div className="UserName_938126">{user.name}</div>
                    <div className="Username_938126">{`@${user.username}`}</div>
                </div>
                <div className="SVGThreeDots">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><circle cx="5" cy="12" r="2" fill="#536471"></circle><circle cx="12" cy="12" r="2" fill="#536471"></circle><circle cx="19" cy="12" r="2" fill="#536471"></circle></g></svg>
                </div>
            </div>
        </div>
        </>
    )
}

export default BottomProfileButton
