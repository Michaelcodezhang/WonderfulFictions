import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from '../components/HomePage/index'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from '../components/Layout/index'
import ArticleList from '../components/Articles/ArticleList/index'
import Page2 from '../components/Page2/index'
import Page3 from '../components/Page3/index'
import HomePage from '../components/HomePage/index'
import Register from '../components/Register/index'
import ArticlePage from '../components/Articles/ArticlePage/index'
import AuthorPage from '../components/Author/index'
import RegisterSuccess from '../components/Register/success'

const AppRouter = (props) => {
  const AsyncDemo = dynamic({component: () => import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={HomePage} />
        <Route path='/articleList' component={ArticleList} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/author/:name' component={AuthorPage}/>
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route path='/register' component={Register}/>
        <Route path='/register/success' component={RegisterSuccess}/>
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/home' />
      </Switch>
    </Layout>
  )
}

export default AppRouter
