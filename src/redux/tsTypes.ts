export interface Action {
  type: String,
  payload?: any
}


export interface State {
  user: {
  userDetails?: {
      name: string,
      password: string
    },
    apiUsers: [
      any
    ]
  }
  posts?: number
}