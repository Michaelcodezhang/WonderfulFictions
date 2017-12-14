/**
 * Created by out_xu on 17/7/13.
 */
import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Layout, Menu, Card } from 'antd'
import Login from '../LoginAbout/index'
import './index.less'

const {Header, Footer, Content} = Layout
const MenuItem = Menu.Item

class LayoutContent extends Component {
  render () {
    return (
      <Layout className='app'>
        <Header className='app-header'>
          <div className='app-header-title-left' />
          <div className='app-header-title'>竹林茶香</div>
          <div className='app-header-title-right'>
            <Login/>
          </div>
        </Header>
        <Menu className='app-menu' mode='horizontal'>
          <MenuItem className='app-menu-item'>
            <Link to='/home'>主页</Link>
          </MenuItem>
          <MenuItem className='app-menu-item'>
            <Link to='/articleList'>文章列表</Link>
          </MenuItem>
          <MenuItem className='app-menu-item'>
            <Link to='/classify'>分类</Link>
          </MenuItem>
          <MenuItem className='app-menu-item'>
            <Link to='/page3'>竹林</Link>
          </MenuItem>
        </Menu>
        <Content className='app-content'>
          <Card className='app-content-card'>
            {this.props.children}
          </Card>
        </Content>
        <Footer className='app-footer'>
          竹林茶香@2017
          &nbsp;&nbsp;
          By&nbsp; MichaelCode
        </Footer>
      </Layout>
    )
  }
}

export default LayoutContent
