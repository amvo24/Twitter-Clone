import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../store/posts'


function PostDetail() {
    const dispatch = useDispatch()
    let { id } = useParams()
    id = Number(id)
    const post = useSelector((state) => state.posts[id])

    useEffect(() => {
        dispatch(getOnePost(id))
    }, [dispatch, id])

    return (
        <>
        <div className='PostContainer0'>
        <div className='PostBody'>
        {post.body}
        </div>
        <div className='PostImage'>
        {post?.image}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        </>
    )
}

export default PostDetail
