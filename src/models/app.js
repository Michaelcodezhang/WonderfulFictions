import fetchPost from '../utils/request'
import API from '../api/index'

export default {
  namespace: 'app',
  state: {
    userName: '',
    authority: 0,
    authorInfo: {
      name: '',
      headSculpture: '',
      introduction: ''
    },
    article: {
      'key': '',
      'preKey': '',
      'nextKey': '',
      'title': '',
      'author': '',
      'updatedTime': '',
      'content': ''
    },
    isLogin: false
  },
  subscriptions: {},
  effects: {
    * login ({payload}) {
      const data = yield fetchPost({
        url: API.login,
        method: 'post',
        data: payload
      })
      return data
    },
    * register ({payload}) {
      const data = yield fetchPost({
        url: API.register,
        method: 'post',
        data: payload
      })
      return data
    }
  },
  reducers: {
    loginAuthorPage (state, payload) {
      return {
        ...state,
        authorInfo: payload.authorInfo
      }
    },
    loginArticlePage (state, payload) {
      return {
        ...state,
        article: payload.article
      }
    },
    isLogin (state, payload) {
      const {userName, authority} = payload.userData
      return {
        ...state,
        isLogin: true,
        userName: userName,
        authority: authority
      }
    },
    logout (state, payload) {
      return {
        ...state,
        isLogin: false
      }
    }
  }
}
