import { combineReducers, createStore } from 'redux';
import postReducer from './post/postReducer';
import userReducer from './user/userReducer';


const store = createStore(combineReducers({posts: postReducer, user: userReducer}));


export default store;