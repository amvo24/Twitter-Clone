const LOAD_ALL_LIKES_BY_USER = 'likes/load_all_likes_by_user'
const LOAD_ALL_LIKES_BY_POST = 'likes/load_all_likes_by_post'
const CREATE_LIKE = 'likes/create_likes'
const DELETE_LIKE = 'likes/delete_likes'


const loadLikesByUser = (payload) => ({
    type: LOAD_ALL_LIKES_BY_USER,
    payload
});
const loadLikesByPost = (payload) => ({
    type: LOAD_ALL_LIKES_BY_POST,
    payload
});
const like = (payload) => ({
    type: CREATE_LIKE,
    payload
});
const unlike = (payload) => ({
    type: DELETE_LIKE,
    payload
});

//THUNK
  export const getAllLikeByUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${userId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(loadLikesByUser(payload));
    }
}


  export const getAllLikeByPost = (postId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${postId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(loadLikesByPost(payload));
    }
}

  export const createLike = (postId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${postId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(like(payload));
    }
}

  export const deleteLike = (postId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${postId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(unlike(payload));
    }
}

const initialState = {};

export default function likeReducer(state = initialState, action) {
    let newState = {}

    switch (action.type) {
    case LOAD_ALL_LIKES_BY_USER:
        action.payload.likes.forEach(el => newState[el.id] = el);
        return {...newState}
    case LOAD_ALL_LIKES_BY_POST:
        // newState[action.payload.id] = action.payload
        action.payload.likes.forEach(el => newState[el.id] = el);
        return newState
    case CREATE_LIKE:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case DELETE_LIKE:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    default:
      return state;
  }
}
