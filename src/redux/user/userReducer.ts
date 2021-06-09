import { Action } from '../tsTypes';
import { LOGIN_USER } from './userTypes';


const initState = {
  userDetails: {}
}

const userReducer = (state = initState, action : Action ) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, userDetails: action.payload};
    default: 
      return state;
  }
}


export default userReducer;

