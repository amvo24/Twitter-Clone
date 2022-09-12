import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommentByPostId } from '../../store/comments'
import './GetCommentsForPost.css'
import CreateCommentModal from "./CommentModal";
import { deleteAPost } from '../../store/posts'



function GetCommentsForPost({id}) {
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.comments)
    const currentUser = useSelector((state) => state.session.user)
    const post = useSelector((state) => state.posts[id])
    const commentArray = Object.values(comments)
    // console.log(commentArray, "LOOK HERE")

    useEffect(() => {
        dispatch(getAllCommentByPostId(id))
      }, [dispatch])

    const deletePost = (id) => async(e) => {
      e.preventDefault()
      dispatch(deleteAPost(id))
    }

    return (
        <>
        <div>
        {commentArray.map((comment) => (
            <div className="CommentContainer_394">
                <div className="TopCommentContainer">
                    <div className="ImageCommentContainer">
                        <img className="ProfilePicComments" src={comment.user.profile_pic}/>
                    </div>
                    <div className="CommentContainingUserInfo">
                        <div className="user-name_283907">{comment.user.name}</div>
                        <div>{`@${comment.user.username}`}</div>
                    </div>
                </div>
                    <div className="replyingto_9823">
                        {`Replying to @${post?.user.username}`}
                    </div>
                <div className="MiddleCommentContainer">
                    <div>{comment.body}</div>
                </div>
                <div className="BottomCommentContainer">
                            <div className="TweetBottomBar">
                            <div className="TweetCommentButton">
                            <CreateCommentModal id={id}/>
                            </div>
                            <div className="TweetRetweetsButton">RETWEETS</div>
                            <div className="TweetLikesButton">LIKES</div>
                            <div className="TweetDeleteButtonDiv">
                            {(currentUser && currentUser.id === comment.user.id && (
                                <svg
                                className="TweetDeleteButton"
                                onClick={deletePost(id)}
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"

                                width="30"
                                height="30"
                                >
                                <g fill="#F4212E">
                                    <path
                                    d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"
                                    fill="#F4212E"
                                    ></path>
                                    <path
                                    d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"
                                    fill="#F4212E"
                                    ></path>
                                </g>
                                </svg>

                            )) || <button>Share</button>}
                            </div>
                        </div>
                </div>
            </div>
        ))}

        </div>
        </>
    )
}

export default GetCommentsForPost
