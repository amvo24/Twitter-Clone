// constants
const LOAD_REPLIES = 'replies/load_replies'
const CREATE_REPLIES = 'replies/create_post'
const EDIT_REPLIES = 'replies/edit_replies'
const DELETE_REPLIES = 'replies/delete_replies'

const loadReplies = (payload) => ({
  type: LOAD_REPLIES,
  payload
});

const createReplies = (payload) => ({
    type: CREATE_REPLIES,
    payload
});

const editReplies = (payload) => ({
    type: EDIT_REPLIES,
    payload
});

const deleteReplies = (payload) => ({
    type: DELETE_REPLIES,
    payload
});

//THUNKS (REDUX)
export const getAllreplies = () => async (dispatch) => {
    const response = await fetch('/api/replies/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const payload = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(loadReplies(payload));
    }
}

export const createOneReply = (newreplies, id) => async (dispatch) => {
    const response = await fetch(`/api/replies/create/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newreplies)
    });

    if (response.ok) {
        const post = await response.json();

        dispatch(createReplies(post));
    }
};


export const editAReply = (editedReply, id) => async (dispatch) => {
    const {body, images} = editedReply
    const response = await fetch(`/api/replies/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({body, images}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(editReplies(payload));
    }
};

export const deleteAReply = (id) => async (dispatch) => {
    const response = await fetch(`/api/replies/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id}),
    });

    if (response.ok) {
        const payload = await response.json();

        dispatch(deleteReplies(payload));
    }
};

const initialState = {};

export default function repliesReducer(state = initialState, action) {
    const newState = {}

    switch (action.type) {
    case LOAD_REPLIES:
        action.payload.forEach(el => newState[el.id] = el);
        return newState
    case CREATE_REPLIES:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case EDIT_REPLIES:
        newState = {...state}
        newState[action.payload.id] = action.payload
        return newState
    case DELETE_REPLIES:
        newState = {...state}
        delete newState[action.payload]
        return newState
    default:
      return state;
  }
}
