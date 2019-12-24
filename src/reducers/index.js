import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import messages from './messages';
import filteredMes from './filteredPosts';

export default combineReducers({
    routing: routerReducer,
    posts,
    messages,
    filteredMes,
});