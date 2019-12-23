const initialState = [];

export default function createState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                action.newPost,
            ];
        default:
            return state;
    }
}