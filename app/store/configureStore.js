import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware
  )
)

export default function configureStore() {
  sagaMiddleware.run(sagas)
  return store
}
