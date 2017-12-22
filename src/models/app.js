export default {
  namespace: 'app',
  state: {
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
    }
  },
  subscriptions: {},
  effects: {},
  reducers: {
    loginAuthorPage (state, payload) {
      console.log(payload)
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
    }
  }
}
