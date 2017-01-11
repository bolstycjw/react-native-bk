import { AsyncStorage } from 'react-native'
import { take, put, call, fork } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { registerSuccess, registerFailure } from '../actions/registerActions'

function registerCall({email}) {
  return AsyncStorage.getItem('users')
    .then( (usersJson) => {
      const users = JSON.parse(usersJson)
      if (users.filter(user => user.email === email).length === 0) {
        const newUser = { email }
        users.push(newUser)
        AsyncStorage.setItem('users', JSON.stringify(users))
        return newUser
      }
      const error = { status: 'email already exists' }
      throw error
    })
}

function *watchRegisterRequest() {
  while(true) {
    const { name, email, password } = yield take(types.REGISTER.REQUEST);

    try {
      const payload = {
        name,
        email,
        password,
      }
      const response = yield call(registerCall, payload);

      yield put(registerSuccess(response));
      console.log('SAGA REGISTER SUCCESS: ', response);
    } catch (err) {
      console.log('SAGA REGISTER ERR: ', err);
      yield put(registerFailure(err.status));
    }
  }
}

export default function* root() {
  yield fork(watchRegisterRequest);
}
