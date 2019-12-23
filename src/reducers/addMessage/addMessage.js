const initialState = [
    'Первый юзер',
    'Второй юзер',
];

export default function createState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                action.body,
            ];
        default:
            return state;
    }
}