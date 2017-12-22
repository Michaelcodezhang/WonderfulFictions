import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import HomePage from './HomePage/index'
import NotFound from './404'
import Layout from '../components/Layout/index'
import ArticleList from './Articles/ArticleList/index'
import Page3 from './Page3/index'
import Register from './Register/index'
import ArticlePage from './Articles/ArticlePage/index'
import AuthorPage from './Author/index'
import RegisterSuccess from './Register/success'
import Classify from './ClassifyAbout/index'
import ClassifyPage from './ClassifyAbout/ClassifyPage'

const AppRouter = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/articleList' component={ArticleList} />
        <Route path='/article/:id' component={ArticlePage} />
        <Route path='/author/:name' component={AuthorPage} />
        <Route exact path='/classify' component={Classify} />
        <Route path='/classify/:id' component={ClassifyPage} />
        <Route path='/page3' component={Page3} />
        <Route exact path='/register' component={Register} />
        <Route path='/register/success' component={RegisterSuccess} />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/home' />
      </Switch>
    </Layout>
  )
}

export default AppRouter
