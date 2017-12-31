import { routerRedux } from 'dva-react-router-3/router'

export default (path) => {
  if (path) {
    routerRedux.push(path)
  } else {
    throw new Error('Path cannot be null!')
  }
}
