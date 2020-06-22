// * Function to set the users token upon loggin in
export const setToken = token => {
  window.localStorage.setItem('token', token)
}

// * Function to get the users token
export const getToken = () => {
  return window.localStorage.getItem('token')
}

// * Function to log user out
export const logout = () => {
  localStorage.removeItem('token')
}

const getPayload = () => { // * returns the decoded data from the token or false
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3)  return false 
  return JSON.parse(window.atob(parts[1]))
}


// * Check if current user is the owner of an uploaded trainers etc...
export const isOwner = id => {
  const userId = getPayload().sub
  return userId === id
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000) // * works out the time RIGHT NOW
  return now < payload.exp // * is RIGHT NOW earlier that EXPIRY TIME ON TOKEN
}