const initialState = '';

export default function createState(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_POST':
            return action.searchMes
        default:
            return state;
    }
}