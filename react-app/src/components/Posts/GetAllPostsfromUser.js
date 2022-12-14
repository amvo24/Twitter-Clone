import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts, deleteAPost } from '../../store/posts';
import { getAllComment } from '../../store/comments';
import CreateCommentModal from '../Comments/CommentModal';
import SharePost from '../SharePost/SharePost'

function GetAllPostsFromUser({user}) {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const currentUser = useSelector((state) => state.session.user)
    const comments = useSelector((state) => state.comments)
    const commentArray = Object.values(comments).reverse()
    const postsArray = Object.values(posts).reverse()

    const handleClick = () => {
      alert('This feature will be coming soon!')
    }

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    useEffect(() => {
      dispatch(getAllComment())
    }, [dispatch])

    const deletePost = (id) => async(e) => {
        e.preventDefault()
        dispatch(deleteAPost(id))
    }


    return (
      <>
        {postsArray
          .filter((singlePost) => user.id === singlePost.user_id)
          .map((post) => (
            <div className="TweetContainer" key={post.id}>
              <Link to={`/post/${post.id}`} className="TweetLink">
                <div className="TweetUserContainer">
                  <div className="TweetContainerTopHalf">
                    {user && user.id === post.user_id && (
                      <div
                        className="TweetUserContainer123"
                        key={user.id}
                      >
                        <div className="ImageContainer34">
                          <img
                            className="ProfilePic"
                            src={user.profile_pic}
                          />
                        </div>
                        <div className="TweetUserInfoContainer">
                          <div className="TweetName">
                            {user.name}
                            {/* <svg xmlnsXlink="http://www.w3.org/1999/xlink" className='verifiedCheck' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="Verified account" role="img" width="24" height="24"><g fill="#1D9BF0"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" fill="#1D9BF0"></path></g></svg> */}
                            <div className="TweetUsername">
                              {"@" + user.username}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="TweetBody">{post.body}</div>
                  </div>
                </div>
                {post.images ? (
                  <img className="TweetImgTag" src={post.images} />
                ) : null}
              </Link>
        <div className="TweetBottomBar">
          <div className='buttonAndAmountcontainer'>
            <div className="TweetCommentButton">
              <CreateCommentModal id={post.id} />
            </div>
            <div className='Numberof'>
                  {commentArray.filter((comment) => comment.post.id === post.id).length}
            </div>
          </div>
          <div className="TweetRetweetsButton">
            <svg 
              onClick={handleClick}
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              aria-hidden="true" 
              class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi" 
              width="25" 
              height="25"><g 
              fill="#536471"><path 
              d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" 
              fill="#536471"
              ></path>
              </g>
            </svg>
          </div>
          <div className="TweetLikesButton">
          <svg
                onClick={handleClick}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <g fill="#536471">
                  <path
                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                    fill="#536471"
                  ></path>
                </g>
              </svg>
          </div>
          <div className="TweetDeleteButtonDiv">
            {(currentUser && currentUser.id === post.user_id && (
              <svg
                className="TweetDeleteButton"
                onClick={deletePost(post.id)}
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
            )) || (
              <SharePost post={post}/>
            )}
          </div>
        </div>

            </div>
          ))}
      </>
    );
}

export default GetAllPostsFromUser
