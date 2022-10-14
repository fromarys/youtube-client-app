export interface IUserCredentials {
  login: string,
  password: string,
}

export interface IAuthData {
  isLoggedIn: boolean,
  login: string
}

export interface IUserData {
  login: string,
  token: string
}
