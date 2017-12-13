import { routerRedux } from 'dva/router'

export default (path) => {
  if (path) {
    routerRedux.push(path)
  } else {
    throw new Error('Path cannot be null!')
  }
}
