import { combineReducers } from 'redux';
import addPost from './addPost/addPost';
import addMessage from './addMessage/addMessage';
import searchPost from './searchPost/searchPost';

export default combineReducers({
    addPost,
    addMessage,
    searchPost,
});