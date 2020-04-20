import * as actionTypes from './actionTypes'

export default function users (state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE:
      return {
        ...state,
        createError: false,
        createLoading: true
      }
    case actionTypes.FETCH:
      return {
        ...state,
        error: false,
        loading: true
      }
    case actionTypes.CREATE_ERROR:
      return {
        ...state,
        createError: action.error,
        createLoading: false,
        loading: false,
        user: null
      }
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case actionTypes.CREATE_SUCCESS:
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        createError: false,
        createLoading: false,
        error: false,
        loading: false,
        user: action.user
      }
    default:
      return state
  }
}
