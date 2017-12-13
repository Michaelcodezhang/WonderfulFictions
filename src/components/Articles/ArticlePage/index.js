import React, {Component} from 'react'
import {Link} from 'dva/router'
import {Icon} from 'antd'
import RainCity from './articleSoures/RainCity'
import './index.less'

class ArticlePage extends Component {
  render(){
    return (
      <div className='article-page-container'>
        <div className='article-page-container-nav'>
          <div className='article-page-container-nav-last'>
            <Link to='#'><Icon type='arrow-left' />上一篇</Link>
          </div>
          <div className='article-page-container-nav-next'>
            <Link to='#'>下一篇<Icon type='arrow-right' /></Link>
          </div>
        </div>
        <div className='article-page-container-content'>
          <RainCity/>
        </div>
      </div>
    )
  }
}

export default ArticlePage
