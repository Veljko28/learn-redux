import { createStore } from 'redux';
import postReducer from './post/postReducer';

const store = createStore(postReducer);


export default store;