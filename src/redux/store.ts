import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postReducer from './post/postReducer';
import userReducer from './user/userReducer';



const store = createStore(combineReducers({posts: postReducer, user: userReducer}), composeWithDevTools( applyMiddleware(thunk) ));


export default store;