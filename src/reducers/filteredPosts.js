const initialState = '';

export default function createState(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_POST':
            return action.filteredMes
        default:
            return state;
    }
}