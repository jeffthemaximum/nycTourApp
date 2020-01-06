import * as actionTypes from './actionTypes'

export function createUser ({ email, password }) {
  return {
    type: actionTypes.CREATE,
    email,
    password
  }
}

export function fetchUser () {
  return {
    type: actionTypes.FETCH
  }
}
