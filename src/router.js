import React from 'react'
import { Router, Route, IndexRoute } from 'dva-react-router-3/router'

// 引入Index组件
import AppLayout from './components/AppLayout'
import Classify from './routes/AppRouter/ClassifyAbout'
import RegisterSuccess from './routes/AppRouter/Register/success'
import AuthorPage from './routes/AppRouter/Author'
import ArticlePage from './routes/AppRouter/Articles/ArticlePage'
import ClassifyPage from './routes/AppRouter/ClassifyAbout/ClassifyPage'
import NotFound from './routes/404'
import HomePage from './routes/AppRouter/HomePage'
import ArticleList from './routes/AppRouter/Articles/ArticleList'
import Page3 from './routes/AppRouter/Page3'
import Register from './routes/AppRouter/Register'

// 引入Admin组件
import AdminLayout from './components/AdminLayout'
import AdminHome from './routes/AdminRouter/AdminHome'
import UserDeletePage from './routes/AdminRouter/UserAdmin/UserDelete'

const RouterConfig = ({history, app}) => {
  return (
    <Router history={history}>
      <Route path='/' component={AppLayout}>
        <IndexRoute component={HomePage}/>
        <Route path='home' component={HomePage}/>
        <Route path='articleList' component={ArticleList}/>
        <Route path='article/:id' component={ArticlePage}/>
        <Route path='author/:name' component={AuthorPage}/>
        <Route path='classify' component={Classify}/>
        <Route path='classify/:id' component={ClassifyPage}/>
        <Route path='page3' component={Page3}/>
        <Route path='register' component={Register}/>
        <Route path='register/success' component={RegisterSuccess}/>
        <Route path='404' component={NotFound}/>
      </Route>
      <Route path='admin' component={AdminLayout}>
        <IndexRoute component={AdminHome}/>
        <Route path='userDelete' component={UserDeletePage}/>
      </Route>
    </Router>
  )
}

export default RouterConfig
