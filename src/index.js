// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from "redux";

function addPost(state = ['Я поспал'], action) {
    console.log(action);

    switch (action.type) {
        case 'ADD_POST':
        
        return [
            ...state,
            action.body
        ];
    default:
        return state;
    }
}

const store = createStore(addPost);
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD_POST',
    body: 'Я поел',
});

store.dispatch({
    type: 'ADD_POST',
    body: 'Я покекал',
});
