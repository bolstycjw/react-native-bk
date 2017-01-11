import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: '',
  user: {},
  errorMessage: '',
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case types.REGISTER.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case types.REGISTER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false,
        user: action.user
      }
    case types.REGISTER.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      }
    case types.LOGIN.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        failure: false,
        user: action.user,
      }
    case types.LOGIN.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      }
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
