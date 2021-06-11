import { Action } from '../tsTypes';
import { API_USERS, API_USERS_FAILURE, API_USERS_SUCCESS, ADD_USER, HANDLE_USER } from './userTypes';
import { v4 } from 'uuid';


const initState = {
  apiUsers: [],
  userDetails: {
    id: v4(),
    name: '',
    username: '',
    company: {
      name: ''
    }
  },
  errors: "",
  loading: false
}

const userReducer = (state = initState, action : Action ) => {
  switch (action.type) {
    case HANDLE_USER:
      return {...state,userDetails: action.payload};
    case ADD_USER:
      return {...state, apiUsers: [...state.apiUsers,action.payload]};
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

