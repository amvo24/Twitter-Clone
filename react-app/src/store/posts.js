// constants
const LOAD_POSTS = 'posts/load_posts'
const LOAD_ONE_POST = 'posts/load_one_post'
const CREATE_POST = 'posts/create_post'
const EDIT_POST = 'posts/edit_post'
const DELETE_POST = 'posts/delete_post'

const LOAD_ALL_LIKED = 'posts/load_all_liked'
const LIKED_POST = 'posts/liked_post'
const UNLIKED_POST = 'posts/unliked_post'

const loadPosts = (payload) => ({
  type: LOAD_POSTS,
  payload
});

const loadOnePost = (payload) => ({
    type: LOAD_ONE_POST,
    payload
});

const createPost = (payload) => ({
    type: CREATE_POST,
    payload
});

const editPost = (payload) => ({
    type: EDIT_POST,
    payload
});

const deletePost = (payload) => ({
    type: DELETE_POST,
    payload
});

const loadLiked = (payload) => ({
    type: LOAD_ALL_LIKED,
    payload
});
const likeAPost = (payload, userId) => ({
    type: LIKED_POST,
    payload,
    userId
});
const unlikeAPost = (payload, userId) => ({
    type: UNLIKED_POST,
    payload,
    userId
});

//THUNKS (REDUX)
export const getAllPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        // if (data.errors) {
        //     return;
        // }


        dispatch(loadPosts(data));
        return data
    }
}

export const getOnePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();

        dispatch(loadOnePost(payload))
    }
}

export const createOnePost = (newPost) => async (dispatch) => {
    const response = await fetch('/api/posts/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost)
    });

    if (response.ok) {
        const post = await response.json();

        dispatch(createPost(post));
    }
};


export const editAPost = (editedPost, id) => async (dispatch) => {
    const {body, images} = editedPost
    const response = await fetch(`/api/posts/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({body, images}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(editPost(payload));
    }
};

export const deleteAPost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(deletePost(id));
        return payload
    }

};

// Likes
export const loadLikes = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/like`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(loadLiked(id));
        return payload
    }

};
export const likePost = (postId, userId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/like`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const payload = await response.json();
        
        dispatch(likeAPost(payload.likes, userId));
        return payload
    }

};
export const deleteLike = (postId, userId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/like`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(unlikeAPost(payload.likes, userId));
        return payload
    }

};

const initialState = {};

export default function postReducer(state = initialState, action) {
    let newState = {}

    switch (action.type) {
    case LOAD_POSTS:
        action.payload.posts.forEach(el => newState[el.id] = el);
        return {...newState}
    case LOAD_ONE_POST:
        newState[action.payload.id] = action.payload
        return newState
    case CREATE_POST:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case EDIT_POST:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case DELETE_POST:
        newState = {...state}
        delete newState[action.payload]
        return newState

    case LOAD_ALL_LIKED:
        newState= {...state, ...action.payload}
        return newState
    case LIKED_POST:
        newState = {...state, ...action.payload}
        return newState
    case UNLIKED_POST:
        newState = {...state}
        delete newState[action.payload]
        return newState
    default:
      return state;
  }
}
