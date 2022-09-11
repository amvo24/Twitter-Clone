// constants
const LOAD_COMMENTS = 'comment/load_comment'
const LOAD_COMMENTS_BY_POST = 'comment/load_comment_by_post'
const CREATE_COMMENT = 'comment/create_post'
const EDIT_COMMENT = 'comment/edit_comment'
const DELETE_COMMENT = 'comment/delete_comment'

const loadComment = (payload) => ({
  type: LOAD_COMMENTS,
  payload
});

const loadCommentByPost = (payload) => ({
  type: LOAD_COMMENTS_BY_POST,
  payload
});

const createComment = (payload) => ({
    type: CREATE_COMMENT,
    payload
});

const editComment = (payload) => ({
    type: EDIT_COMMENT,
    payload
});

const deleteComment = (payload) => ({
    type: DELETE_COMMENT,
    payload
});

//THUNKS (REDUX)
export const getAllComment = () => async (dispatch) => {
    const response = await fetch('/api/comments/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(loadComment(payload));
    }
}
export const getAllCommentByPostId = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (payload.errors) {
            return;
        }

        dispatch(loadCommentByPost(payload));
    }
}

export const createOneComment = (newComment, id) => async (dispatch) => {
    const response = await fetch(`/api/comments/create/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment)
    });

    if (response.ok) {
        const post = await response.json();

        dispatch(createComment(post));
    }
};


export const editAComment = (editedComment, id) => async (dispatch) => {
    const {body, images} = editedComment
    const response = await fetch(`/api/comments/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({body, images}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(editComment(payload));
    }
};

export const deleteAComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(deleteComment(payload));
    }
};

const initialState = {comments: []};

export default function commentReducer(state = initialState, action) {
    let newState = {}

    switch (action.type) {
    case LOAD_COMMENTS:
        action.payload.forEach(el => newState[el.id] = el);
        return newState
    case LOAD_COMMENTS_BY_POST:
        newState = {...state, comments:[...action.payload.comments]}
        // action.payload.forEach(el => newState[el.id] = el);
        return newState
    case CREATE_COMMENT:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case EDIT_COMMENT:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case DELETE_COMMENT:
        newState = {...state}
        delete newState[action.payload]
        return newState
    default:
      return state;
  }
}
