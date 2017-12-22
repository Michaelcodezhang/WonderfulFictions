import React, { Component } from 'react'
import { Table, Card } from 'antd'
import { Link } from 'dva/router'
import { connect } from 'dva'
import dataJson from '../../sources/articleLists/data.json'
import AuthorInfos from '../../sources/authorInfos/data.json'
import './index.less'

const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title',
  render: (text, record) => {
    const articleLink = '/article/' + record.key
    return (
      <Link to={articleLink}>{text}</Link>
    )
  }
}, {
  title: '作者',
  dataIndex: 'authorCh',
  key: 'authorCh',
  render: (text, record) => {
    const authorLink = '/author/' + record.author
    return (
      <Link to={authorLink}>{text}</Link>
    )
  }
}, {
  title: '类型',
  dataIndex: 'typeCh',
  key: 'typeCh'
}, {
  title: '更新时间',
  dataIndex: 'updatedTime',
  key: 'updatedTime'
}]

class AuthorPage extends Component {
  constructor () {
    super()
    this.state = {
      isAuthor: true
    }
  }

  componentWillMount () {
    console.log(3)
    console.log(this.props.match.params.name)
    if (this.props.match.params.name === 'MichaelCode') {
      const authorInfo = AuthorInfos.test1
      this.props.dispatch({type: 'app/loginAuthorPage', authorInfo: authorInfo})
    } else if (this.props.match.params.name === 'zhouguoping') {
      const authorInfo = AuthorInfos.test2
      this.props.dispatch({type: 'app/loginAuthorPage', authorInfo: authorInfo})
    } else {
      this.setState({
        isAuthor: false
      })
    }
  }

  render () {
    const {nameCh, headSculpture, introduction} = this.props.app.authorInfo
    console.log(this.props.app.authorInfo)
    console.log(2)
    const author = this.props.match.params.name
    const datas = dataJson.filter((data) => {
      return (data.author === author)
    })
    return (
      <div>
        {this.state.isAuthor ? (
          <div className='author-page-container'>
            <div className='author-page-container-head'>
              <div className='author-page-container-head-left'>
                <div className='author-page-container-head-left-img'>
                  <img src={headSculpture} alt='' />
                </div>
                <div className='author-page-container-head-left-name'>
                  {nameCh}
                </div>
              </div>
              <Card className='author-page-container-head-introduction'>
                <span id='introduction-text'>作者简介：</span><br /><br />
                {introduction}
              </Card>
            </div>
            <div className='author-page-container-hr'>作者作品：</div>
            <div className='author-page-container-articlelist'>
              <Table columns={columns} dataSource={datas} />
            </div>
          </div>
        ) : (
          <div className='author-page-container-none'>
            抱歉，查询不到该作者的信息。。。<br />
            如有疑问，请联系本站管理员
          </div>
        )}
      </div>
    )
  }
}

export default connect(({app}) => ({app}))(AuthorPage)
