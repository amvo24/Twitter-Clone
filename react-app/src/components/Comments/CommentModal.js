import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Modal} from '../../Context/Modal'
import CreateComment from './CreateComment'
import './CommentModal.css'



function CreateCommentModal({id}) {
    const [showModal, setShowModal] = useState(false)
    const post = useSelector((state) => state.posts[id])
    const currentUser = useSelector((state) => state.session.user)

    return (
        <>
        <svg onClick={()=> setShowModal(true)} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi" width="24" height="24"><g fill="#536471"><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" fill="#536471"></path></g></svg>
        {/* <button onClick={()=> setShowModal(true)}>Comment</button> */}
        {showModal && (
        <Modal className="Modal_2983" onClose={() => setShowModal(false)}>
          <div className="TopOfModal">
                <div className="UserInfo_328974">
                        <div className="UserProfilePic_23407">
                          <img className="ProfilePic" src={post.user.profile_pic}/>
                        </div>
                        <div className="Usernameandname_1234">
                            <div className="Name_2390">{post.user.name}</div>
                            <div className="Username_2391">{'@'+post.user.username}</div>
                        </div>
                </div>
                <div className="PostDetails_234">
                        <div className="PostBody_08932">{post.body}</div>
                        {/* <div className="PostImage_08932">
                          <img className="ActualPic_234" src={post.images}/>
                        </div> */}
                <div className="MiddlePart_238794">
                      <div className="greyLineConnectingProfilePic"></div>
                      <div className="ReplyingtoThing">{`Replying to @${post.user.username}`}</div>
                </div>
                </div>
          </div>
          <div className="BottomOfModal">
                  <div className="createCommentForm_2093">
                    <div className="ReplyProfilePic_34">
                      <img className="ProfilePic" src={currentUser.profile_pic}/>
                    </div>
                    <div className="Thing_234">
                    <CreateComment id={id}/>

                    </div>
                  </div>
          </div>
        </Modal>
      )}
        </>
    )

}

export default CreateCommentModal;
