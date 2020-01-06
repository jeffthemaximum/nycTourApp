import * as actionTypes from './actionTypes'

export default function users (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH:
      return {
        ...state,
        error: false,
        loading: true
      }
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        user: action.user
      }
    default:
      return state
  }
}
