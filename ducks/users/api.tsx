import axios, { AxiosRequestConfig } from 'axios'
import lodashGet from 'lodash/get'

import { generateHeaders } from '../../services/requestHeaders'
import { handleApiError } from '../../services/errorHandler'
import constants from '../../constants'

export async function createUser (email, password) {
  const requestConfig: AxiosRequestConfig = {
    data: { email, password },
    headers: generateHeaders({}),
    method: 'post',
    url: `${constants.API_HOST}/api/v1/users`
  }

  try {
    const response = await axios.request(requestConfig)
    return response
  } catch (e) {
    const errors = handleApiError(e)
    return { error: errors, status: lodashGet(e, 'response.status') }
  }
}

export async function fetchUser (jwt) {
  const requestConfig: AxiosRequestConfig = {
    headers: generateHeaders({ jwt }),
    method: 'get',
    url: `${constants.API_HOST}/api/v1/users`
  }

  try {
    const response = await axios.request(requestConfig)
    return response
  } catch (e) {
    const errors = handleApiError(e)
    return { error: errors, status: lodashGet(e, 'response.status') }
  }
}

export async function loginUser (email, password) {
  const requestConfig: AxiosRequestConfig = {
    data: { email, password },
    headers: generateHeaders({}),
    method: 'post',
    url: `${constants.API_HOST}/api/v1/login`
  }

  try {
    const response = await axios.request(requestConfig)
    return response
  } catch (e) {
    const errors = handleApiError(e)
    return { error: errors, status: lodashGet(e, 'response.status') }
  }
}
