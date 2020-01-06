import camelcaseKeys from 'camelcase-keys'

export const deserialize = user => camelcaseKeys(user)
