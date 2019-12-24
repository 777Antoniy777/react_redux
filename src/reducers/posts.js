const initialState = [];

export default function createState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                action.newPost,
            ];
        case 'GET_POSTS':
            return [
                ...state,
                ...action.posts,
            ]
        default:
            return state;
    }
}