export interface Action {
  type: String,
  payload?: any
}


export interface State {
  userDetails?: {
    name: string,
    password: string
  },
  posts?: number
}