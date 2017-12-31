import React, { Component } from 'react'
import { Link } from 'dva-react-router-3/router'
import { connect } from 'dva-react-router-3'
import { Icon, Button } from 'antd'
import Articles from '../../../../sources/articleSoures/data.json'
import ReactMarkdown from 'react-markdown'
import './index.less'

class ArticlePage extends Component {
  constructor () {
    super()
    this.state = {
      isArticle: true  // 标志文章是否存在
    }
    this.selectPreArticle = this.selectPreArticle.bind(this)
    this.selectNextArticle = this.selectNextArticle.bind(this)
  }

  componentWillMount () {
    console.log('componentWillMount')
    if (this.props.params.id === '1001') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test1})
    } else if (this.props.params.id === '1002') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test2})
    } else if (this.props.params.id === '1003') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test3})
    } else {
      this.setState({
        isArticle: false
      })
    }
  }

  selectPreArticle () {
    if (this.props.app.article.preKey === '1001') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test1})
    } else if (this.props.app.article.preKey === '1002') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test2})
    } else {
      // this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test2})
    }
  }

  selectNextArticle () {
    if (this.props.app.article.nextKey === '1002') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test2})
    } else if (this.props.app.article.nextKey === '1003') {
      this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test3})
    } else {
      // this.props.dispatch({type: 'app/loginArticlePage', article: Articles.test2})
    }
  }

  render () {
    const article = this.props.app.article
    const isArticle = this.state.isArticle
    const preLink = '/article/' + article.preKey
    const nextLink = '/article/' + article.nextKey
    console.log(article)
    return (
      <div className='article-page-container'>
        <div className='article-page-container-nav'>
          <Link to={preLink} onClick={this.selectPreArticle}>
            {(article.preKey === 'null' || !isArticle) ? (
              <Button className='article-page-container-nav-pre' type='primary' ghost disabled>
                <Icon type='arrow-left' />上一篇
              </Button>
            ) : (
              <Button className='article-page-container-nav-pre' type='primary' ghost>
                <Icon type='arrow-left' />上一篇
              </Button>
            )}
          </Link>
          <Link to={nextLink} onClick={this.selectNextArticle}>
            {(article.nextKey === 'null' || !isArticle) ? (
              <Button className='article-page-container-nav-next' type='primary' ghost disabled>
                下一篇 <Icon type='arrow-right' />
              </Button>
            ) : (
              <Button className='article-page-container-nav-next' type='primary' ghost>
                下一篇 <Icon type='arrow-right' />
              </Button>
            )}
          </Link>
        </div>
        {isArticle ? (
          <div className='article-page-container-content'>
            <div className='article-page-container-content-title'>{article.title}</div>
            <div className='article-page-container-content-author'>By&nbsp;{article.authorCh}</div>
            <ReactMarkdown source={article.content} />
          </div>
        ) : (
          <div className='article-page-container-none'>
            抱歉，此文章不存在或已被删除。。。<br />
            如有疑问，请联系本站管理员
          </div>
        )}
      </div>
    )
  }
}

export default connect(({app}) => ({app}))(ArticlePage)
