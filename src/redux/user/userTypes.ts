export const LOGIN_USER = "LOGIN_USER";


export const loginUser = (user: {name: string, password: string}) => ({
  type: LOGIN_USER,
  payload: user
});