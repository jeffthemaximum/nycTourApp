import { call, put, takeLatest } from 'redux-saga/effects'

import * as clientStorageService from '../../services/clientStorage'
import * as userActionTypes from './actionTypes'
import * as userApi from './api'
import * as userSerializer from '../../services/serializers/userSerializer'
import constants from '../../constants'

function * createUser (action) {
  const { email, password } = action
  const response = yield call(userApi.createUser, email, password)
  const { data: user, error } = response
  if (user) {
    const { jwt } = user
    yield call(clientStorageService.set, constants.JWT, jwt)
    const deserializedUser = userSerializer.deserialize(user)
    yield put({ type: userActionTypes.CREATE_SUCCESS, user: deserializedUser })
  } else {
    yield put({ type: userActionTypes.CREATE_ERROR, error })
  }
}

function * fetchUser () {
  const jwt = yield call(clientStorageService.get, constants.JWT)
  const response = yield call(userApi.fetchUser, jwt)
  const { data: user, error } = response
  if (user) {
    const { jwt } = user
    yield call(clientStorageService.set, constants.JWT, jwt)
    const deserializedUser = userSerializer.deserialize(user)
    yield put({ type: userActionTypes.FETCH_SUCCESS, user: deserializedUser })
  } else {
    yield put({ type: userActionTypes.FETCH_ERROR, error })
  }
}

const watchers = [
  takeLatest(userActionTypes.CREATE, createUser),
  takeLatest(userActionTypes.FETCH, fetchUser)
]

export { watchers }
