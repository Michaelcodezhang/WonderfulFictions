import React from 'react'
import AppRouter from './routes/app'
import { Router } from 'dva/router'

const RouterConfig = ({history, app}) => {
  return (
    <Router history={history}>
      <AppRouter />
    </Router>
  )
}

export default RouterConfig
