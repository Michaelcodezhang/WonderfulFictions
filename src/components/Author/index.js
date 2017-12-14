import React, { Component } from 'react'
import { Table, Card } from 'antd'
import { Link } from 'dva/router'
import { connect } from 'dva'
import dataJson from '../../sources/articleLists/data.json'
import MichaelCode from '../../sources/authorInfos/MichaelCode.json'
import './index.less'

const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title',
  render: text => <Link to='/article'>{text}</Link>
}, {
  title: '作者',
  dataIndex: 'author',
  key: 'author',
  render: (text, record) => {
    const authorLink = '/author/' + record.author
    return (
      <Link to={authorLink}>{text}</Link>
    )
  }
}, {
  title: '类型',
  dataIndex: 'type-ch',
  key: 'type-ch'
}, {
  title: '更新时间',
  dataIndex: 'updatedTime',
  key: 'updatedTime'
}]

class AuthorPage extends Component {
  constructor () {
    super()
  }

  componentWillMount () {
    console.log(this.props.param)
    const {name, headSculpture, introduction} = MichaelCode
    this.props.dispatch({type: 'app/loginAuthorPage', authorInfo: {name, headSculpture, introduction}})
  }

  render () {
    const {name, headSculpture, introduction} = this.props.app.authorInfo
    return (
      <div className='author-page-container'>
        <div className='author-page-container-head'>
          <div className='author-page-container-head-left'>
            <div className='author-page-container-head-left-img'>
              <img src={headSculpture} alt='' />
            </div>
            <div className='author-page-container-head-left-name'>
              {name}
            </div>
          </div>
          <Card className='author-page-container-head-introduction'>
            <span id='introduction-text'>作者简介：</span><br /><br />
            {introduction}
          </Card>
        </div>
        <div className='author-page-container-hr'>作者作品：</div>
        <div className='author-page-container-articlelist'>
          <Table columns={columns} dataSource={dataJson} />
        </div>
      </div>
    )
  }
}

export default connect(({app}) => ({app}))(AuthorPage)
