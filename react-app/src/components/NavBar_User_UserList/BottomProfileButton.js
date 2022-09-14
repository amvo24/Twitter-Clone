import React, {useState, useEffect} from "react";
import './BottomProfileButton.css'
import LogoutButton from "../auth/LogoutButton";
import LoginModal from "../auth/LoginModal"
import LoginForm from "../auth/LoginForm";

function BottomProfileButton({user}) {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return
        setShowMenu(true)
    }

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }
        document.addEventListener('click', closeMenu)
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu])

    return (
        <>
        <div className="Container_3028" onClick={openMenu}>
                <div className="Content_3028">
                    <div className="ProfilePic_381296">
                        <img className="ActualPic_381296" src={user.profile_pic}/>
                    </div>
                    <div className="NameAndInfo_90238">
                        <div className="UserName_938126">{user.name}</div>
                        <div className="Username_938126">{`@${user.username}`}</div>
                    </div>
                    <div>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#536471"><circle cx="5" cy="12" r="2" fill="#536471"></circle><circle cx="12" cy="12" r="2" fill="#536471"></circle><circle cx="19" cy="12" r="2" fill="#536471"></circle></g></svg>
                    </div>
                </div>
        </div>
        {showMenu && (
            <div className="menu_0897">
                <div className="topOfMenu_23907">
                    <div className="picAndInfo_409">
                        <div className="profilePic_23907">
                            <img className="ActualProfilePic_23907" src={user.profile_pic}/>
                        </div>
                        <div className="userInfo_23907">
                            <div className="userName_23907">{user.name}</div>
                            <div className="username_23907">{`@${user.username}`}</div>
                        </div>
                        <div className="SVG_23834">
                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><g fill="#1D9BF0"><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z" fill="#1D9BF0"></path></g></svg>
                        </div>
                    </div>
                </div>
                <div className="bottomOfMenu_23907">
                    <div className="AddAnotherAccount">
                        <div className="Text_9032">
                            Add Another Account
                            <div>
                                {/* <LoginModal /> */}
                            </div>
                        </div>
                    </div>
                    <div className="LogOut_23907">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default BottomProfileButton
