export default {
  namespace: 'app',
  state: {
    authorInfo: {
      name: '',
      headSculpture: '',
      introduction: ''
    }
  },
  subscriptions: {},
  effects: {},
  reducers: {
    loginAuthorPage (state, payload) {
      return {
        ...state,
        authorInfo: payload.authorInfo
      }
    }
  }
}
