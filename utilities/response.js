export const ResponseEnum = Object.freeze({
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
})

export const Oke = (message, data) => {
  return {
    status: true,
    message,
    data,
  }
}

export const Failed = (message) => {
  return {
    status: false,
    message,
  }
}
