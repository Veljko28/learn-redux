import axios from "axios";
import { User } from "../tsTypes";

export const ADD_USER = "ADD_USER";
export const HANDLE_USER = "HANDLE_USER";
export const API_USERS = "API_USERS";
export const API_USERS_SUCCESS = "API_USERS_SUCCESS";
export const API_USERS_FAILURE = "API_USERS_FAILURE";





export const addUser = (user: User) => ({
  type: ADD_USER,
  payload: user
});


export const handleUser = (user: User) => ({
  type: HANDLE_USER,
  payload: user
});

export const apiUsers = () => ({
  type: API_USERS,
})


export const apiUsersSuccess = (users: any) => ({
  type: API_USERS_SUCCESS,
  payload: users
})

export const apiUsersFailure = (errors: any) => ({
  type: API_USERS_FAILURE,
  payload: errors
})


export const getApiUsers = () => (dispatch: any) => {
  dispatch(apiUsers());
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    const users = res.data;
    console.log(users);
    dispatch(apiUsersSuccess(users))
  })
  .catch(err => {
    dispatch(apiUsersSuccess(err.message))
  });
  
}