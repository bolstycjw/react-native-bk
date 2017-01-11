import * as types from './actionTypes';

export function registerRequest(name, email, password) {
  return {
    type: types.REGISTER.REQUEST,
    name,
    email,
    password,
  }
}

export function registerSuccess({token, user}) {
  return {
    type: types.REGISTER.SUCCESS,
    token,
    user,
  }
}

export function registerFailure(err) {
  return {
    type: types.REGISTER.FAILURE,
    err,
  }
}
