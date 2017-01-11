import { fork } from 'redux-saga/effects'

import login from './login'
import register from './register'

// Consider using takeEvery
export default function* root() {
  yield fork(login)
  yield fork(register)
}
