import { Action } from '../tsTypes';
import { POST_COUNT } from './actionTypes';

const initState = {
    count: 10
}

const postReducer = (state = initState, action : Action ) => {
  switch (action.type) {
    case POST_COUNT:
      return {...state, count:  state.count - 1 };
    default: 
      return state;
  }
}


export default postReducer;

