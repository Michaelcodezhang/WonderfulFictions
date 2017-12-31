import React, { Component } from 'react'
import {Link} from 'dva-react-router-3/router'
import { Layout, Menu, Breadcrumb, Icon, Card } from 'antd'
import './index.less'

const {Header, Content, Sider, Footer} = Layout
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const BreadcrumbItem = Breadcrumb.Item

class AdminLayout extends Component {
  render () {
    return (
      <Layout className='admin'>
        <Header className='admin-header'>
          <div className='admin-header-title'>竹林茶香</div>
        </Header>
        <Layout className='admin-center'>
          <Sider className='admin-center-left'>
            <Menu mode='inline' style={{height: '100%', borderRight: 0}}>
              <SubMenu key='sub1' title={<span><Icon type='user'/>个人管理</span>}>
                <MenuItem>文章发布</MenuItem>
                <MenuItem>文章删除</MenuItem>
              </SubMenu>
              <SubMenu key='sub2' title={<span><Icon type='file'/>文章管理</span>}>
                <MenuItem>文章审核</MenuItem>
                <MenuItem>文章删除</MenuItem>
              </SubMenu>
              <SubMenu key='sub3' title={<span><Icon type='team'/>用户管理</span>}>
                <MenuItem>权限更改</MenuItem>
                <MenuItem><Link to='/admin/userDelete'>用户删除</Link></MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className='admin-center-right'>
            <Breadcrumb className='admin-center-right-bread'>
              <BreadcrumbItem><Link to='/'>home</Link></BreadcrumbItem>
              <BreadcrumbItem>admin</BreadcrumbItem>
            </Breadcrumb>
            <Card className='admin-center-right-content'>
              {this.props.children}
            </Card>
          </Layout>
        </Layout>
        <Footer className='admin-footer'>
          竹林茶香@2017
          &nbsp;&nbsp;
          By&nbsp; MichaelCode
        </Footer>
      </Layout>
    )
  }
}

export default AdminLayout
