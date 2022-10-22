/* eslint-disable no-useless-escape */
export enum LocalStorage {
  auth = 'authorized',
}

export enum Login {
  email = 'email',
  password = 'password',
}

export enum SearchParam {
  query = 'query',
}

export enum ErrorTypes {
  required = 'required',
  email = 'email',
  password = 'password',
  pattern = 'pattern',
}

export enum EmailErrors {
  required = 'Please enter a login email',
  invalid = 'The login email is invalid',
}

export enum PasswordErrors {
  required = 'Please enter a password',
  invalid = `Your password isn't strong enough:
at least 8 characters,
a mixture of both uppercase and lowercase letters,
a mixture of letters and numbers,
inclusion of at least one special character, e.g., ! @ # ? ]`,
}
