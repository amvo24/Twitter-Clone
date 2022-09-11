import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommentByPostId } from '../../store/comments'


function GetCommentsForPost({id}) {
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.comments)
    const commentArray = Object.values(comments)
    // console.log(commentArray, "LOOK HERE")

    useEffect(() => {
        dispatch(getAllCommentByPostId(id))
      }, [dispatch])

    return (
        <>
        <div>
        {commentArray.map((comment) => (

            <div className="CommentContainer_394">
                <div>{comment.user.profile_pic}</div>
                <div>{comment.user.name}</div>
                <div>{comment.user.username}</div>
                <div>{comment.body}</div>
            </div>
        ))}

        </div>
        </>
    )
}

export default GetCommentsForPost
