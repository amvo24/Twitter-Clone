// constants
const LOAD_POSTS = 'posts/load_posts'
const LOAD_ONE_POST = 'posts/load_one_post'
const CREATE_POST = 'posts/create_post'
const EDIT_POST = 'posts/edit_post'
const DELETE_POST = 'posts/delete_post'

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

        dispatch(deletePost(payload));
    }
};

const initialState = {};

export default function postReducer(state = initialState, action) {
    let newState = {}

    switch (action.type) {
    case LOAD_POSTS:
        action.payload.posts.forEach(el => newState[el.id] = el);
        return newState
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
    default:
      return state;
  }
}
