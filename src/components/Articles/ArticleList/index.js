import React, { Component } from 'react'
import { Table } from 'antd'
import { Link } from 'dva/router'
import dataJson from '../../../sources/articleLists/data.json'

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
  title: '更新时间',
  dataIndex: 'updatedTime',
  key: 'updatedTime'
}]

class Articles extends Component {
  render () {
    return (
      <div>
        <Table columns={columns} dataSource={dataJson} />
      </div>
    )
  }
}

export default Articles
