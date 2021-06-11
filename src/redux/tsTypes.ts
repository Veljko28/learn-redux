export interface Action {
  type: String,
  payload?: any
}

export interface User {
  id: number,
  name: string,
  username: string,
  company: {name: string}
}

export interface State {
  user: {
  userDetails?: User,
    apiUsers: [
      any
    ]
  }
  posts?: number
}

