export const generateHeaders = ({ jwt = null }) => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (jwt) {
    headers['Authorization'] = `Bearer ${jwt}`
  }

  return headers
}
