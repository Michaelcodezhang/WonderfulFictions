/**
 * Created by out_xu on 17/7/13.
 */
import React, { Component } from 'react'
import { connect } from 'dva-react-router-3'
import { Link } from 'dva-react-router-3/router'
import { Layout, Menu, Card, message } from 'antd'
import Login from '../../routes/AppRouter/LoginAbout/index'
import './index.less'

const {Header, Footer, Content} = Layout
const MenuItem = Menu.Item

class AppLayout extends Component {
  constructor () {
    super()
    this.handleLogout = this.handleLogout.bind(this)
    this.asyncLogin = this.asyncLogin.bind(this)
  }

  componentWillMount () {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
      this.asyncLogin(userData)
    }
  }

  asyncLogin = async function (values) {
    const data = await this.props.dispatch({
      type: 'app/login',
      payload: {
        userName: values.userName,
        password: values.password
      }
    })
    this.props.dispatch({type: 'app/isLogin', userData: data.data})
  }

  handleLogout () {
    message.info('已退出登录')
    this.props.dispatch({type: 'app/logout'})
    localStorage.removeItem('userData')
  }

  render () {
    const {isLogin, userName, authority} = this.props.app
    return (
      <Layout className='app'>
        <Header className='app-header'>
          <div className='app-header-title-left'/>
          <div className='app-header-title'>竹林茶香</div>
          <div className='app-header-title-right'>
            {
              isLogin ? (
                <div className='isLogin'>
                  {userName},已登录
                  {(authority === 1) ? (
                    <ul className='isLogin-ul'>
                      <li className='isLogin-ul-li'>个人空间</li>
                      <li className='isLogin-ul-li'><Link to='/admin'>后台管理</Link> </li>
                      <li className='isLogin-ul-li' onClick={this.handleLogout}>退出登录</li>
                    </ul>
                  ) : (
                    <ul className='isLogin-ul'>
                      <li className='isLogin-ul-li'>个人空间</li>
                      <li className='isLogin-ul-li' onClick={this.handleLogout}>退出登录</li>
                    </ul>
                  )}
                </div>
              ) : (
                <Login/>
              )
            }
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

export default connect(({app}) => ({app}))(AppLayout)
