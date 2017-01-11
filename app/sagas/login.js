import { AsyncStorage } from 'react-native'
import { take, put, call, fork } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { loginSuccess, loginFailure } from '../actions/loginActions'

const loginData = {
  token: 'my secret token',
  user: {
    name: 'feitico',
    email: 'user@gmail.com',
  },
};

function loginCall({ email, password }) {
  return AsyncStorage.getItem('users')
    .then( (usersJson) => {
      const users = JSON.parse(usersJson)
      const authenticatedUser = users.filter(user => user.email === email && user.password === password)[0]
      if (authenticatedUser.email === email) {
        return loginData
      }
      const error = {status: 'wrong email or password'}
      throw error
    })
}

function *watchLoginRequest() {
  while(true) {
    const { email, password } = yield take(types.LOGIN.REQUEST);

    try {
      const payload = {
        email,
        password,
      }
      const response = yield call(loginCall, payload);

      yield put(loginSuccess(response));
      console.log('SAGA LOGIN SUCCESS: ', response);
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err);
      yield put(loginFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchLoginRequest);
}
