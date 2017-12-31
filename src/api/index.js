const __APIHOST__ = 'http://112.74.192.87/api/'

const apiMaker = (path) => {
  return __APIHOST__ + path
}

export default {
  login: apiMaker('login'),
  register: apiMaker('register')
}
