import { Action } from '../tsTypes';
import { API_USERS, API_USERS_FAILURE, API_USERS_SUCCESS, LOGIN_USER } from './userTypes';


const initState = {
  userDetails: {},
  apiUsers: [],
  errors: "",
  loading: false
}

const userReducer = (state = initState, action : Action ) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, userDetails: action.payload};
    case API_USERS:
      return {...state, loading: true } 
    case API_USERS_SUCCESS: 
       return {...state, loading: false, apiUsers: action.payload}
    case API_USERS_FAILURE
    :  return {...state, loading: false, errors: action.payload}
    default: 
      return state;
  }
}


export default userReducer;

