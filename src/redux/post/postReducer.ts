import { Action } from '../tsTypes';
import { POST_COUNT } from './actionTypes';

const initState = {
  posts: 10
}

const postReducer = (state = initState, action : Action ) => {
  switch (action.type) {
    case POST_COUNT:
      return {...state, posts: state.posts - 1 };
    default: 
      return state;
  }
}


export default postReducer;

